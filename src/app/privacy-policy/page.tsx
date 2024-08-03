import Banner from "@/components/Section/Banner";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read our Privacy Policy to understand how we collect, use, and protect your personal information.',
  keywords: ['Privacy Policy', 'Data Protection', 'Privacy Statement', 'Your Company Name'],
}

export default function page() {
  return (
    <>
      <Banner title="Privacy Policy" />
      <div className="flex max-w-4xl mx-auto py-20 p-10 sm:px-0 flex-col gap-10">
        <section className="flex flex-col gap-4">
          <p className="text-base font-medium leading-7 text-slate-600">
            Last updated on November 2, 2021,
          </p>
          <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
            Collection of non-personal information
          </h2>
          <div className="text-slate-600 text-justify">
            Upon accessing the website, our servers will automatically log details
            sent by your browser. This may encompass your device&apos;s IP address,
            browser version, operating system details, language preferences, the
            webpage you were previously on before visiting our site, the specific
            pages you browse on our site, duration spent on each page, search
            queries within our site, access times and dates, and various statistical
            data.
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
            Information transfer and storage
          </h2>
          <div className="text-slate-600 text-justify">
            Depending on where you are situated, data transfers may necessitate
            storing and transferring your information to a country different from
            your own. You have the right to understand the legal framework behind
            these information transfers to countries beyond the European Union or to
            international organizations governed by public international law, such
            as the UN, and to be informed about the security protocols implemented
            by us to protect your data. If such transfers occur, you can obtain
            further details by consulting the appropriate sections of this document
            or by reaching out to us via the contact information provided in the
            Contact section.
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
            Google Analytics
          </h2>
          <ul>
            <li className="text-slate-600 list-inside list-disc">
              We have implemented Google Analytics on our website to track and
              analyze website usage. Google Analytics is a web analytics service
              provided by Google Inc. (&quot;Google&quot;).
            </li>
            <li className="text-slate-600 list-inside list-disc">
              Google Analytics uses cookies to collect and store data about your
              website usage. You can learn more about how Google Analytics uses
              cookies by visiting <a className="font-medium text-blue-700 hover:opacity-80 underline" href="https://policies.google.com/privacy?hl=en-US">Google&apos;s Privacy Policy</a> page.
            </li>
            <li className="text-slate-600 list-inside list-disc">
              By using our website, you consent to the processing of data about you
              by Google Analytics in the manner and for the purposes set out above.
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
            Disclosure Of Data
          </h2>
          <div className="text-slate-600 text-justify">We may disclose personal information that we collect, or you provide:</div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
            Disclosure For Law Enforcement.
          </h2>
          <div className="text-slate-600 text-justify">Under certain circumstances, we may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities.</div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
            Security Of Data
          </h2>
          <div className="text-slate-600 text-justify">The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</div>
        </section>

        <section className="flex flex-col gap-4">
          <div className="text-2xl sm:text-4xl font-black leading-10 text-primary">
            CI/CD Tools
          </div>
          <div className="text-slate-600 text-justify">We may use third-party Service Providers to automate the development process of our Service.</div>

          <li className="list-inside list-disc text-xl font-semibold leading-10 text-primary">
            GitHub
          </li>

          <p className="text-justify">GitHub is a development platform to host and review code, manage projects, and build software.</p>
          <p className="text-justify">For more information on what data GitHub collects for what purpose and how the protection of the data is ensured, please visit <a className="font-medium text-blue-700 hover:opacity-80 underline" href="https://docs.github.com/en/articles/github-privacy-statement">GitHub Privacy Policy</a> page.</p>

          <li className="text-xl font-semibold leading-10 text-primary list-inside list-disc">
            GitLab CI/CD
          </li>
          <p className="text-justify">GitLab CI/CD is provided by GitLab, Inc.</p>
          <p className="text-justify">GitLab CI (Continuous Integration) service is a part of GitLab that build and test the software whenever developer pushes code to application.</p>
          <p className="text-justify">GitLab CD (Continuous Deployment) is a software service that places the changes of every code in the production which results in every day deployment of production.</p>
          <p className="text-justify">For more information on what data GitLab CI/CD collects for what purpose and how the protection of the data is ensured, please visit <a className="font-medium text-blue-700 hover:opacity-80 underline" href="https://docs.github.com/en/articles/github-privacy-statement">GitLab CI/CD Privacy Policy</a> page.</p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
            Links To Other Sites
          </h2>
          <div className="text-slate-600 text-justify">Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party&apos;s site. We strongly advise you to review the Privacy Policy of every site you visit.</div>
          <div className="text-slate-600 text-justify">We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
            Changes to this Privacy Policy
          </h2>
          <div className="text-slate-600 text-justify">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</div>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
            Acceptance
          </h2>
          <div className="text-slate-600 text-justify"> By continuing to use our website, you acknowledge that you have read and
            understood this Privacy Policy and agree to its terms.</div>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl sm:text-4xl font-black leading-10 text-primary">
            Have a question?
          </h2>
          <div className="text-slate-600">
            Feel free to contact us at{" "}
            <a
              className="underline font-medium text-blue-700 hover:opacity-80"
              href="mailto:contact@bloginsigths.com"
            >
              contact@bloginsigths.com
            </a>{" "}
            and we&apos;ll help you out.
          </div>
        </section>
      </div>
    </>
  );
}
