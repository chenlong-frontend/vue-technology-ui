import Vue from 'vue'

declare module 'vue/types/vue' {
    interface Vue {
        $confirm:any,
        $message: any,
        componentName?: string
    }
    interface VueConstructor {
      install: (Vue: any) => void,
      componentName: string
      $message: any
    }
}