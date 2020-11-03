declare module 'vue/types/vue' {
  interface VueConstructor {
    install: (Vue: any) => void
  }
}