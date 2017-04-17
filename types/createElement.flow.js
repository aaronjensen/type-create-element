declare type SFC<T> = (config: T, context: any) => React$Element<T>
declare function myCreateElement<C, P: { children: C }>(component: ReactClass<P>, props: $Diff<P, {children: C}> & {children?: void}, children: C): React$Element<P>
declare function myCreateElement<C, P: { children: C }>(component: ReactClass<P>, props: $Diff<P, {children: C}> & {children?: void}, ...children: C): React$Element<P>
declare function myCreateElement<P>(component: ReactClass<P>, props: P, children: void): React$Element<P>

declare function myCreateElement<C, P: { children: C }>(component: SFC<P>, props: $Diff<P, {children: C}> & {children?: void}, children: C): React$Element<P>
declare function myCreateElement<C, P: { children: C }>(component: SFC<P>, props: $Diff<P, {children: C}> & {children?: void}, ...children: C): React$Element<P>
declare function myCreateElement<P>(component: SFC<P>, props: P, children: void): React$Element<P>
