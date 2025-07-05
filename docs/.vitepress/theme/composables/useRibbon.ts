import { isClient, useMounted, useScopeDispose } from "vitepress-theme-teek";

interface UseRibbonOptions {
  /**
   * 透明度
   *
   * @default 0.6
   */
  alpha?: number;
  /**
   * 宽度
   *
   * @default 90
   */
  size?: number;
  /**
   * z-index
   *
   * @default -1
   */
  zIndex?: number;
  /**
   * 是否立即执行彩带渲染
   *
   * @default true
   */
  immediate?: boolean;
  /**
   * 点击页面时是否重新渲染彩带
   *
   * @default false
   */
  clickReRender?: boolean;
  /**
   * 是否为彩带元素绑定点击事件，仅限 clickReRender 为 true 和 zIndex >= 0 时触发。
   * 1、当为 true，则给彩带元素绑定点击事件
   * 2、当为 false，则给全局 document 绑定点击事件
   *
   * @default false
   */
  ribbonDomBindClick?: boolean;
}

const fn = () => {};

export const useRibbon = (options: UseRibbonOptions = {}) => {
  let canvas: HTMLCanvasElement | null = null;
  let ctx: CanvasRenderingContext2D | null = null;
  let cleanupFn = fn;

  const {
    alpha = 0.6,
    size = 90,
    zIndex = -1,
    clickReRender = false,
    ribbonDomBindClick = false,
    immediate = true,
  } = options;

  const initRibbon = () => {
    if (!isClient) return fn;
    if (document.getElementById("ribbon")) return fn;

    // 创建 canvas
    canvas = document.createElement("canvas");
    canvas.id = "ribbon";
    canvas.style.cssText = `position:fixed;top:0;left:0;z-index:${zIndex}`;
    document.body.append(canvas);

    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const math = Math;
    let r = 0;
    const PI_2 = math.PI * 2;
    const cos = math.cos;
    const random = math.random;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx = canvas.getContext("2d");

    if (!ctx) return fn;

    ctx.scale(dpr, dpr);
    ctx.globalAlpha = alpha;

    let path: { x: number; y: number }[] = [];

    function init() {
      if (!ctx) return fn;
      ctx.clearRect(0, 0, width, height);
      path = [
        { x: 0, y: height * 0.7 + size },
        { x: 0, y: height * 0.7 - size },
      ];
      while (path[1].x < width + size) {
        draw(path[0], path[1]);
      }
    }

    function draw(start: { x: number; y: number }, end: { x: number; y: number }) {
      if (!ctx) return fn;
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      const nextX = end.x + (random() * 2 - 0.25) * size;
      const nextY = geneY(end.y);
      ctx.lineTo(nextX, nextY);
      ctx.closePath();

      r -= PI_2 / -50;
      ctx.fillStyle =
        "#" +
        (
          ((cos(r) * 127 + 128) << 16) |
          ((cos(r + PI_2 / 3) * 127 + 128) << 8) |
          (cos(r + (PI_2 / 3) * 2) * 127 + 128)
        ).toString(16);
      ctx.fill();
      path[0] = path[1];
      path[1] = { x: nextX, y: nextY };
    }

    function geneY(y: number): number {
      const temp = y + (random() * 2 - 1.1) * size;
      return temp > height || temp < 0 ? geneY(y) : temp;
    }

    init();

    // 点击重新绘制
    const handleClick = () => init();

    const dom = ribbonDomBindClick ? canvas : document;

    if (clickReRender) {
      dom.addEventListener("click", handleClick);
      dom.addEventListener("touchstart", handleClick);
    }

    // 返回清理函数
    return () => {
      if (clickReRender) {
        dom.removeEventListener("click", handleClick);
        dom.removeEventListener("touchstart", handleClick);
      }
      if (canvas && canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
      canvas = null;
      ctx = null;
    };
  };

  const start = () => {
    cleanupFn = initRibbon();
  };

  const stop = () => {
    cleanupFn();
  };

  useMounted(() => {
    if (immediate) start();
  });

  useScopeDispose(stop);

  return { start, stop };
};
