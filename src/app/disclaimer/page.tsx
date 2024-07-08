
import Banner from "@/components/Section/Banner";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Disclaimer',
    description: 'Read our Disclaimer to understand the terms and conditions regarding the use of information on Blog Insigths. Learn about our external links, professional advice, and personal responsibility policies.',
    keywords: ['Disclaimer', 'Blog Insigths', 'Terms and Conditions', 'External Links', 'Professional Advice', 'Personal Responsibility'],
}

export default function page() {
    return (
        <>
            <Banner title="Disclaimer" />
            <div className="flex max-w-4xl mx-auto py-20 p-10 sm:px-0 flex-col gap-12">

                <section className="flex flex-col gap-6">
                    <div>
                        <p className="text-base font-medium text-slate-600 mb-5">
                            Last updated on November 2, 2021,
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-black text-primary">
                            General Information
                        </h2>
                    </div>
                    <p className="text-slate-600 text-justify">
                        The information provided on Blog Insights ("we," "us," or "our") is for general informational purposes only. All information on the Site{' '}
                        <a href="https://www.bloginsigths.com" target="_blank" rel="nofollow noreferrer noopener" className="font-medium text-blue-700 hover:opacity-80 underline">
                            bloginsigths.com
                        </a>
                        {' '}is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
                    </p>

                    <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
                        External Links Disclaimer
                    </h2>
                    <p className="text-slate-600 text-justify">
                        The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the Site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.
                    </p>

                    <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
                        Professional Disclaimer
                    </h2>
                    <p className="text-slate-600 text-justify">
                        The Site cannot and does not contain professional advice. The programming, new technologies, and blogging success information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice. The use or reliance on any information contained on this site is solely at your own risk.
                    </p>

                    <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
                        Personal Responsibility
                    </h2>
                    <p className="text-slate-600 text-justify">
                        You acknowledge you are using our Site voluntarily and that any choices, actions, and results now and in the future are solely your responsibility. We will not be liable to you or any other party for any decision made or action taken in reliance on the information given in the Site.
                    </p>

                    <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
                        Contact Us
                    </h2>
                    <p className="text-slate-600 text-justify">
                        If you have any feedback, comments, requests for technical support, or other inquiries, please contact us by email: {' '}
                        <a href="mailto:support@bloginsigths.com" className="font-medium text-blue-700 hover:opacity-80 underline">
                            support@bloginsigths.com
                        </a>.
                    </p>

                    <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
                        Updates
                    </h2>
                    <p className="text-slate-600 text-justify">
                        We may update this Disclaimer from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons.
                    </p>
                </section>



            </div >
        </>
    )
}
