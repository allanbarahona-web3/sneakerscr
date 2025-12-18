export function Form({ children }: any) {
  return <form>{children}</form>;
}

export function FormControl({ children }: any) {
  return <>{children}</>;
}

export function FormField({ children }: any) {
  return <>{children}</>;
}

export function FormItem({ children }: any) {
  return <div>{children}</div>;
}

export function FormLabel({ children }: any) {
  return <label>{children}</label>;
}

export function FormMessage() {
  return null;
}
