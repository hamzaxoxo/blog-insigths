import { getImage } from '@/lib/getImage'
import Image from 'next/image'
export default async function DynamicImage({
    url,
    alt,
    containerClass
}: {
    url: string
    alt?: string
    containerClass?: string
}) {
    const { base64, img } = await getImage(url)
    return (
        <div className={containerClass}>
            <Image
                src={img}
                alt={alt || ''}
                layout="fill"
                objectFit="cover"
                placeholder='blur'
                blurDataURL={base64}
            />
        </div>
    )
}