import Banner from '@/components/Section/Banner'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Read the Terms and Conditions of Use for Blog Insigths. Understand your rights and responsibilities while using our website.',
  keywords: ['Terms and Conditions', 'Terms of Use', 'Website Terms', 'Legal Agreement', 'Blog Insigths'],
}

export default function TermsOfService() {
  return (
    <>
      <Banner title="Terms of Services" />
      <div className="flex max-w-4xl mx-auto py-20 p-10 sm:px-0 flex-col gap-10">
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
            1. Terms
          </h2>
          <p className="text-slate-600 text-justify">
            By accessing this Website, accessible from{' '}
            <a href={`${process.env.NEXT_PUBLIC_URL}`} className="font-medium text-blue-700 hover:opacity-80 underline">
              www.bloginsigths.com
            </a>, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trademark law.
          </p>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
            2. Use License
          </h2>
          <p className="text-slate-600 text-justify">
            Permission is granted to temporarily download one copy of the materials on Blog Insigths&apos;s Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-inside list-disc text-slate-600">
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose or for any public display;</li>
            <li>Attempt to reverse engineer any software contained on Blog Insigths&apos;s Website;</li>
            <li>Remove any copyright or other proprietary notations from the materials; or</li>
            <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server.</li>
          </ul>
          <p className="text-slate-600 text-justify">
            This will let Blog Insigths terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.
          </p>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
            3. Disclaimer
          </h2>
          <p className="text-slate-600 text-justify">
            All the materials on Blog Insigths&apos;s Website are provided &quot;as is&quot;. Blog Insigths makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Blog Insigths does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.
          </p>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
            4. Limitations
          </h2>
          <p className="text-slate-600 text-justify">
            Blog Insigths or its suppliers will not be held accountable for any damages that will arise with the use or inability to use the materials on Blog Insigths&apos;s Website, even if Blog Insigths or an authorized representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdictions do not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.
          </p>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
            5. Revisions and Errata
          </h2>
          <p className="text-slate-600 text-justify">
            The materials appearing on Blog Insigths&apos;s Website may include technical, typographical, or photographic errors. Blog Insigths will not promise that any of the materials in this Website are accurate, complete, or current. Blog Insigths may change the materials contained on its Website at any time without notice. Blog Insigths does not make any commitment to update the materials.
          </p>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
            6. Links
          </h2>
          <p className="text-slate-600 text-justify">
            Blog Insigths has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by Blog Insigths of the site. The use of any linked website is at the user&apos;s own risk.
          </p>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
            7. Site Terms of Use Modifications
          </h2>
          <p className="text-slate-600 text-justify">
            Blog Insigths may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.
          </p>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
            8. Your Privacy
          </h2>
          <p className="text-slate-600 text-justify">
            Please read our{' '}
            <Link href="/privacy-policy" className="font-medium text-blue-700 hover:opacity-80 underline">
              Privacy Policy
            </Link>.
          </p>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
            9. Governing Law
          </h2>
          <p className="text-slate-600 text-justify">
            Any claim related to Blog Insigths&apos;s Website shall be governed by the laws of us without regard to its conflict of law provisions.
          </p>
        </section>
      </div>
    </>
  )
}
