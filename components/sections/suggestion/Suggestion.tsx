import Container from '@/components/layout/Container'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
const Suggestion = () => {
    return (
        <section className='py-4'>
            <Container size='lg'>
                <Card className='border-0 shadow-xl'>
                    <CardHeader>
                        <CardTitle>
                            Summery
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <h1>Hello</h1>
                    </CardContent>
                </Card>
            </Container>
        </section>
    )
}

export default Suggestion