import {
  createContext,
  type ReactNode,
  useRef,
  useContext,
  type RefObject,
} from 'react';

interface ComponentRef {
  prevRef: RefObject<HTMLInputElement>;
  ref: RefObject<HTMLInputElement>;
  props: object;
  nextRef: RefObject<HTMLInputElement>;
}

class Components {
  private readonly _components: Map<RefObject<HTMLInputElement>, ComponentRef>;

  constructor() {
    this._components = new Map();
  }

  public add = (componentRef: RefObject<HTMLInputElement>, props: object) => {
    let lastComponentRef = this._getLastComponent()?.ref;
    if (lastComponentRef) {
      const lastComponent = this._components.get(
        lastComponentRef
      ) as ComponentRef;

      this._components.set(lastComponent.ref, {
        ...lastComponent,
        nextRef: componentRef,
      });
    } else {
      lastComponentRef = componentRef;
    }

    this._components.set(componentRef, {
      prevRef: lastComponentRef,
      ref: componentRef,
      props,
      nextRef: componentRef,
    });
  };

  public remove = (componentRef: RefObject<HTMLInputElement>) => {
    const component = this._components.get(componentRef);
    if (!component) return;

    let { prevRef, nextRef } = component;
    if (prevRef !== componentRef) {
      const prevComponent = this._components.get(prevRef) as ComponentRef;
      this._components.set(prevComponent.ref, {
        ...prevComponent,
        nextRef,
      });
    } else {
      prevRef = nextRef;
    }

    const nextComponent = this._components.get(nextRef) as ComponentRef;
    this._components.set(nextComponent.ref, {
      ...nextComponent,
      prevRef,
    });
    this._components.delete(componentRef);
  };

  public get = (component: RefObject<HTMLInputElement>) =>
    this._components.get(component);

  public getAll = () => Array.from(this._components.values());

  private readonly _getLastComponent = () => {
    if (this._components.size === 0) return undefined;
    return Array.from(this._components)[this._components.size - 1][1];
  };
}

interface ContextValue {
  components: Components;
}

export function createComponentContext() {
  const ComponentContext = createContext<ContextValue | undefined>(undefined);

  function ComponentProvider({ children }: { children?: ReactNode }) {
    const components = useRef<ContextValue['components']>(
      new Components()
    ).current;

    return (
      <ComponentContext.Provider value={{ components }}>
        {children}
      </ComponentContext.Provider>
    );
  }

  function useComponentContext() {
    const context = useContext(ComponentContext);

    if (!context)
      throw new Error('Component should get in Component Context Provider');
    return context;
  }
  return [ComponentProvider, useComponentContext] as const;
}
