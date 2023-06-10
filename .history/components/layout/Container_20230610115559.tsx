const Container = ({ size = 'lg', children }: { size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl', children: any }) => {
    return (
        <div className={`container max-w-screen-${size}`}>
            {children}
        </div>
    )
}

export default Container