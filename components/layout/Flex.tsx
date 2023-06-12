interface Props {
    children: any,
    justify?: string,
    align?: string,
    wrap?: boolean,
    col?: boolean,
    w?: string, 
    gap?: number
}

const Flex = ({w='w-full', justify = 'justify-start', align = 'items-start', wrap, col, gap=0, children }: Props) => {
    return (
        <div className={`
            flex ${w} ${wrap ? 'flex-wrap' : ''} ${col ? 'flex-col' : ''} ${justify} ${align} ${w} gap-${gap}
        `}>
            {children}
        </div>
    )
}

export default Flex