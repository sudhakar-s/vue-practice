<script lang="ts">
import { provide, toRef, h, defineComponent, type PropType } from 'vue'
import Avatar, { type Size, SIZE_KEY } from './Avatar.vue'
import { computed } from 'vue';
import { cloneVNode } from 'vue';

// Ref: https://github.com/nuxt/ui/blob/dev/src/runtime/components/elements/AvatarGroup.ts
function getSlotsChildren(slots: any) {
  let children = slots.default?.()
  if (children?.length) {
    children = children.flatMap((c: any) => {
      if (typeof c.type === 'symbol') {
        if (typeof c.children === 'string') {
          // `v-if="false"` or commented node
          return
        }
        return c.children
      } else if (c.type.name === 'ContentSlot') {
        //  ?
        return c.ctx.slots.default?.()
      }
      return c
    }).filter(Boolean)
  }
  return children || []
}

export default defineComponent({
  inheritAttrs: true,
  props: {
    size: {
      type: String as PropType<Size>,
      default: 'medium'
    },
    max: {
      type: Number,
    }
  },
  setup(props, { slots }) {
    provide(SIZE_KEY, toRef(() => props.size))

    const children = computed(() => getSlotsChildren(slots))

    const nodes = computed(() => children.value.map((node: any, index: number, source: any[]) => {
      if (!props.max || (props.max && index < props.max)) {
        return cloneVNode(node, { class: 'avatar--grp', style: { zIndex: index } })
      }

      if (props.max !== undefined && index === props.max) {
        return h(Avatar, {
          class: 'avatar--grp avatar--grp-txt',
          color: 'neutral',
          text: `+ ${source.length - props.max}`,
          style: {
            zIndex: index
          }
        })
      }

      return null
    }).filter(Boolean).reverse())

    return () => h('div', { class: 'a-group d-flex' }, nodes.value)
  }
})
</script>

<style lang="scss" scoped>
.a-group {
  isolation: isolate;
  position: relative;
  :deep(.avatar--grp) {
    box-shadow: 0px 0px 0px 4px var(--surface-bg-gray-normal);
  }
  & > :deep(.avatar--grp):not(:last-child) {
    position: relative;
    margin-right: -12px;
  }
}
</style>