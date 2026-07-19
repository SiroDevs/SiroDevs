import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type CardOwnProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: ReactNode;
};

type CardProps<T extends ElementType> = CardOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof CardOwnProps<T>>;

const BASE_CLASSES =
  "rounded-2xl border border-paper-line dark:border-night-line bg-paper-raised dark:bg-night-raised transition-colors hover:border-brand/50";

export function Card<T extends ElementType = "div">({
  as,
  className = "",
  children,
  ...rest
}: CardProps<T>) {
  const Component = as ?? "div";
  return (
    <Component className={`${BASE_CLASSES} ${className}`} {...rest}>
      {children}
    </Component>
  );
}
