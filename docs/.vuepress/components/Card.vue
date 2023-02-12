<template>
  <div class="card-wrapper">
    <div class="front">
      <slot name="front"></slot>
    </div>
    <div class="back">
      <slot name="back"></slot>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.card-wrapper {
  position relative
  .front, .back {
    border-radius: 6px;
    background-position: center;
    background-size: cover;
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    transition: ease-in-out 600ms;
    overflow hidden
    box-shadow: var(--box-shadow)
    &.back {
      transform: rotateY(-180deg);
    }
  }
  &:hover {
    .front {
      transform: rotateY(180deg);
    }
    .back {
      transform: rotateY(0deg);
    }
  }
}
</style>

