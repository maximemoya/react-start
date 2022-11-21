import React from "react"
import { ReactElement, ReactNode } from "react"

//from:
//https://www.youtube.com/watch?v=z8lDwLKthr8&ab_channel=JackHerrington

// Conventional props:
export const Heading = ({ title }: { title: string }) => {
    return <h1>{title}</h1>
}

export const HeadingWithContent = ({ children }: { children: ReactNode }): ReactElement => {
    return <h1>{children}</h1>
}

// DefaultProps:
type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;
export const defaultContainerProps = {
    heading: <strong>My Heading</strong>
}
export const Container = ({ heading, children }: ContainerProps): ReactElement => {
    return <div><h1>{heading}</h1>{children}</div>
}
Container.defaultProps = defaultContainerProps

// Functional Props
export const TextWithNumber = ({
    header,
    children
}: {
    header?: (num: number) => ReactNode
    children: (num: number) => ReactNode
}) => {
    const [state, stateSet] = React.useState<number>(1)
    return (
        <div>
            {header && <h2>{header?.(state)}</h2>}
            <div>{children(state)}</div>
            <div>
                <button onClick={
                    () => {
                        stateSet(state + 1)
                    }
                }>Add</button>
            </div>
        </div >
    )
}

// List:
export function List<ListItem>({
    items,
    render,
}: {
    items: ListItem[],
    render: (item: ListItem) => ReactNode
}) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {render(item)}
                </li>
            ))}
        </ul>
    )
}

// Class:
export class MyHeaderClass extends React.Component<{
    title: ReactNode,
}> {
    render(): React.ReactNode {
        return (
            <h1>{this.props.title}</h1>
        )
    }
}
