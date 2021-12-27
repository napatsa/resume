import { ComponentType, createElement, lazy } from 'react';

import { PreloadableComponent } from './type';

const lazyWithPreload = <T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>
) => {
  let LoadedComponent: T | undefined;
  let factoryPromise: Promise<void> | undefined;

  const LazyComponent = lazy(factory);

  const loadComponent = () =>
    factory().then((module) => {
      LoadedComponent = module.default;
    });

  const Component = ((props) =>
    createElement(
      LoadedComponent || LazyComponent,
      props
    )) as PreloadableComponent<T>;

  Component.preload = () => factoryPromise || loadComponent();

  return Component;
};

export default lazyWithPreload;
