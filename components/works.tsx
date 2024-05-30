import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

import workData from "@/data/workData.json"

type CardProps = React.ComponentProps<typeof Card>

export function Work({ className, ...props }: CardProps) {
    return (
        <div className="justify-between md:mx-32 m-2 md:gap-4">
            {workData.map((data) => {
                return (
                    <>
                        <Card key={data.title} className="md:flex m-4">
                            <div><Image src={data.link} alt="work" height={600} width={600} unoptimized={true} /></div>
                            <div className="mx-2 md:mx-6">
                                <div className="text-2xl font-bold pt-4">{data.title}</div>
                                <div className="flex pt-4 items-center gap-4">
                                    <div><Badge className="w-20 h-9 flex justify-center text-lg">{data.year}</Badge></div>
                                    <div className="text-lg">{data.type}</div>
                                </div>
                                <div className="pt-4 text-lg">{data.desc}</div>
                            </div>
                            <br />
                        </Card>
                    </>
                )
            })}
        </div>
    )
}

