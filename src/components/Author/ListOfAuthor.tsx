import React from 'react'
import Author from './Author'
import Container from '../Container'
import Author1 from '../../../public/authors/1.png'
import Author2 from '../../../public/authors/2.png'
import Author3 from '../../../public/authors/3.png'
import Author4 from '../../../public/authors/4.png';

export default function ListOfAuthor() {
    return (
        <Container className="flex flex-col justify-center items-center pb-20 !pt-0">
            <div className="self-center text-4xl font-bold tracking-tighter leading-10 text-gray-800">
                List of Authors
            </div>
            <div className="mt-14 w-full md:mt-10 md:max-w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <Author image={Author1.src} name="Floyd Miles" role="Content Writer @Company" />
                    <Author image={Author2.src} name="Dianne Russell" role="Content Writer @Company" />
                    <Author image={Author3.src} name="Floyd Miles" role="Content Writer @Company" />
                    <Author image={Author4.src} name="Floyd Miles" role="Content Writer @Company" />
                </div>

            </div>
        </Container>
    )
}
