interface Props {
    children: any,
    justify?: string,
    align?: string,
    wrap?: boolean,
    col?: boolean
}

const Flex = ({ justify = 'justify-start', align = 'items-start', wrap, col, children }: Props) => {
    return (
        <div className={`
            flex
            ${wrap ? 'flex-wrap' : ''}
            ${col ? 'flex-col' : ''}
            ${justify}
            ${align}
        `}>
            {children}
        </div>
    )
}

export default Flex