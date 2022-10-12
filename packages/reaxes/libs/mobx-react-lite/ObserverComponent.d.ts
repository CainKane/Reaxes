/// <reference types="react" />
interface IObserverProps {
    children?(): React.ReactElement | null;
    render?(): React.ReactElement | null;
}
declare function ObserverComponent({ children, render }: IObserverProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
declare namespace ObserverComponent {
    var propTypes: {
        children: typeof ObserverPropsCheck;
        render: typeof ObserverPropsCheck;
    };
    var displayName: string;
}
export { ObserverComponent as Observer };
declare function ObserverPropsCheck(props: {
    [k: string]: any;
}, key: string, componentName: string, location: any, propFullName: string): Error;
