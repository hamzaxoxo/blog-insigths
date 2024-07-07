
import Banner from "@/components/Section/Banner";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
export const metadata: Metadata = {
  title: 'DMCA',
  description: 'Read our DMCA Policy detailing how we handle copyright infringement complaints. Learn about your rights and how to report issues.',
  keywords: ['DMCA Policy', 'Copyright Infringement', 'Digital Millennium Copyright Act', 'Legal Notice', 'Thug of Blogs'],
}

export default function page() {
  return (
    <>
      <Banner title="DMCA Policy" />
      <div className="flex max-w-4xl mx-auto py-20 p-10 sm:px-0 flex-col gap-12">
        <p className="text-slate-600 text-justify">
          <p className="mb-5 text-base font-medium leading-7 text-slate-600">
            Last updated on November 2, 2021,
          </p>
          This Digital Millennium Copyright Act policy (“Policy”) applies to the{' '}
          <Link href="https://www.thugofblogs.com" target="_blank" rel="nofollow noreferrer noopener" className="font-medium text-blue-700 hover:opacity-80 underline">
            thugofblogs.com
          </Link> website (“Website” or “Service”) and any of its related products and services (collectively, “Services”) and outlines how this Website operator (“Operator”, “we”, “us” or “our”) addresses copyright infringement notifications and how you (“you” or “your”) may submit a copyright infringement complaint.
        </p>

        <p className="text-slate-600 text-justify">
          Protection of intellectual property is of utmost importance to us and we ask our users and their authorized agents to do the same. It is our policy to expeditiously respond to clear notifications of alleged copyright infringement that comply with the United States Digital Millennium Copyright Act (“DMCA”) of 1998, the text of which can be found at the U.S. Copyright Office{' '}
          <Link href="https://www.copyright.gov" target="_blank" rel="nofollow noreferrer noopener" className="font-medium text-blue-700 hover:opacity-80 underline">
            website
          </Link>. This policy has been created with the help of the{' '}
          <Link href="https://www.websitepolicies.com/dmca-policy-generator" target="_blank" rel="nofollow noreferrer noopener" className="font-medium text-blue-700 hover:opacity-80 underline">
            DMCA policy generator
          </Link>.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl sm:text-2xl font-bold leading-8 text-primary">
            Table of contents
          </h3>
          <ol className="list-inside list-disc space-y-3 mt-5 text-slate-600">
            <li>
              <Link href="#what-to-consider-before-submitting-a-copyright-complaint" className="text-primary underline">
                What to consider before submitting a copyright complaint
              </Link>
            </li>
            <li>
              <Link href="#notifications-of-infringement" className="text-primary underline">
                Notifications of infringement
              </Link>
            </li>
            <li>
              <Link href="#changes-and-amendments" className="text-primary underline">
                Changes and amendments
              </Link>
            </li>
            <li>
              <Link href="#reporting-copyright-infringement" className="text-primary underline">
                Reporting copyright infringement
              </Link>
            </li>
          </ol>
        </div>

        <section id="what-to-consider-before-submitting-a-copyright-complaint" className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
            What to consider before submitting a copyright complaint
          </h2>
          <p className="text-slate-600 text-justify">
            Before submitting a copyright complaint to us, consider whether the use could be considered fair use. Fair use states that brief excerpts of copyrighted material may, under certain circumstances, be quoted verbatim for purposes such as criticism, news reporting, teaching, and research, without the need for permission from or payment to the copyright holder.
          </p>
          <p className="text-slate-600 text-justify">
            Please note that if you are unsure whether the material you are reporting is in fact infringing, you may wish to contact an attorney before filing a notification with us.
          </p>
          <p className="text-slate-600 text-justify">
            The DMCA requires you to provide your personal information in the copyright infringement notification. If you are concerned about the privacy of your personal information, you may wish to{' '}
            <Link href="https://www.copyrighted.com/professional-takedowns" target="_blank" rel="nofollow noreferrer noopener" className="font-medium text-blue-700 hover:opacity-80 underline">
              hire an agent
            </Link> to report infringing material for you.
          </p>
        </section>

        <section id="notifications-of-infringement" className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
            Notifications of infringement
          </h2>
          <p className="text-slate-600 text-justify">
            If you are a copyright owner or an agent thereof, and you believe that any material available on our Services infringes your copyrights, then you may submit a written copyright infringement notification (“Notification”) using the contact details below pursuant to the DMCA. All such Notifications must comply with the DMCA requirements. You may refer to a{' '}
            <Link href="https://www.copyrighted.com/dmca-notice-generator" target="_blank" rel="nofollow noreferrer noopener" className="font-medium text-blue-700 hover:opacity-80 underline">
              DMCA takedown notice generator
            </Link> or other similar services to avoid making mistakes and ensure compliance of your Notification.
          </p>
          <p className="text-slate-600 text-justify">
            Filing a DMCA complaint is the start of a pre-defined legal process. Your complaint will be reviewed for accuracy, validity, and completeness. If your complaint has satisfied these requirements, our response may include the removal or restriction of access to allegedly infringing material.
          </p>
          <p className="text-slate-600 text-justify">
            If we remove or restrict access to materials or terminate an account in response to a Notification of alleged infringement, we will make a good faith effort to contact the affected user with information concerning the removal or restriction of access.
          </p>
          <p className="text-slate-600 text-justify">
            Notwithstanding anything to the contrary contained in any portion of this Policy, the Operator reserves the right to take no action upon receipt of a DMCA copyright infringement notification if it fails to comply with all the requirements of the DMCA for such notifications.
          </p>
          <p className="text-slate-600 text-justify">
            The process described in this Policy does not limit our ability to pursue any other remedies we may have to address suspected infringement.
          </p>
        </section>

        <section id="changes-and-amendments" className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
            Changes and amendments
          </h2>
          <p className="text-slate-600 text-justify">
            We reserve the right to modify this Policy or its terms related to the Website and Services at any time at our discretion. When we do, we will revise the updated date at the bottom of this page, send you an email to notify you. We may also provide notice to you in other ways at our discretion, such as through the contact information you have provided.
          </p>
          <p className="text-slate-600 text-justify">
            An updated version of this Policy will be effective immediately upon the posting of the revised Policy unless otherwise specified. Your continued use of the Website and Services after the effective date of the revised Policy (or such other act specified at that time) will constitute your consent to those changes.
          </p>
        </section>

        <section id="reporting-copyright-infringement" className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
            Reporting copyright infringement
          </h2>
          <p className="text-slate-600 text-justify">
            If you would like to notify us of the infringing material or activity, we encourage you to contact us using the details below:
          </p>
          <p className="text-slate-600 text-justify">
            <Link href="http://www.thugofblogs.com/contact" target="_blank" rel="nofollow noreferrer noopener" className="font-medium text-blue-700 hover:opacity-80 underline">
              http://www.thugofblogs.com/contact
            </Link><br />
            <Link href="mailto:legal@thugofblogs.com" className="font-medium text-blue-700 hover:opacity-80 underline">
              legal@thugofblogs.com
            </Link>
          </p>
        </section>
      </div>
    </>
  )
}
