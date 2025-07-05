import { computed, type MaybeRef, toValue } from "vue";
import { isClient, useScopeDispose } from "vitepress-theme-teek";

export interface UseRuntimeOptions {
  /**
   * 需要插入时间的元素选择器
   *
   * @default '#runtime'
   */
  selector?: string;
  /**
   * 是否立即开始
   *
   * @default false
   */
  immediate?: boolean;
  /**
   * 运行时间前缀文案
   */
  prefix?: string;
  /**
   * 运行时间后缀文案
   */
  suffix?: string;
  /**
   * 天数颜色
   *
   * @default #FFA500
   */
  dayColor?: string;
  /**
   * 小时颜色
   *
   * @default #1DBF97
   */
  hourColor?: string;
  /**
   * 分钟颜色
   *
   * @default #8A2BE2
   */
  minuteColor?: string;
  /**
   * 秒数颜色
   *
   * @default #007EC6
   */
  secondColor?: string;
}

export const useRuntime = (initDate: MaybeRef<string>, options: UseRuntimeOptions = {}) => {
  const {
    selector = "#runtime",
    immediate = false,
    prefix = "",
    suffix = "",
    dayColor = "#FFA500",
    hourColor = "#1DBF97",
    minuteColor = "#8A2BE2",
    secondColor = "#007EC6",
  } = options;

  const startTime = computed(() => new Date(toValue(initDate)));
  let runtimeElement: HTMLElement | null;
  let timer: ReturnType<typeof setInterval> | null;

  const update = () => {
    if (!isClient || !runtimeElement) return;

    const now = new Date();
    const diff = now.getTime() - startTime.value.getTime();

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    runtimeElement.innerHTML = `${prefix}
        <span style="color: ${dayColor}">${days}</span> 天
        <span style="color: ${hourColor}">${hours}</span> 时
        <span style="color: ${minuteColor}">${minutes}</span> 分
        <span style="color: ${secondColor}">${seconds}</span> 秒
        ${suffix}
      `;
  };

  const start = () => {
    if (!isClient) return;

    runtimeElement = document.querySelector(selector);
    if (!runtimeElement) return;

    // 初始化
    update();
    timer = setInterval(update, 1000);
  };

  const stop = () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  };

  if (immediate) start();

  useScopeDispose(stop);

  return { start, stop };
};
