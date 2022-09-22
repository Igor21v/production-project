//Типизация CSS реализована также с помощью плагина typescript-plugin-css-modules
declare module '*.scss' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames; 
    export = classNames;
  }