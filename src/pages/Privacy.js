import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Divider from "../components/divider/Divider";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import TermsPrivacyContent from "../components/termsPrivacy/TermsPrivacy";

export default function Privacy() {
    return(
        <>
            <Header />
            
            <Breadcrumb 
                breadcrumbTitle="Privacy Policy" 
                breadcrumbNav={[
                    {
                        navText: "Home",
                        path: "/"
                    }
                ]}
            />

            <Divider />

            <TermsPrivacyContent 
                contentBody={[
                    "<h3>PRIVACY POLICY</h3>",
                    "<p>By using or accessing the service in any manner, you acknowledge that you accept the practices and policies outlined in this Privacy Policy, and you hereby consent that we will collect, use, and share your information in the following ways.</p>",

                    "<div class='mb-5'></div>",

                    "<h3>WHAT DATA WE COLLECT AND WHY WE COLLECT</h3>",
                    "<p>As is true of most websites, we gather certain information (such as mobile provider, operating system, etc.) automatically and store it in log files. We use this information, which does not identify individual users, to analyze trends, to administer the website, to track users movements around the website and to gather demographic information about our user base as a whole. We may link some of this automatically-collected data to certain Personally Identifiable Information.</p>",

                    "<div class='mb-5'></div>",

                    "<h3>PERSONALLY IDENTIFIABLE INFORMATION</h3>",
                    "<p>If you are a Client, when you register with us via our Website, we will ask you for some personally identifiable information, such as your first and last name, company name, email address, billing address, and credit card information. You may review and update this personally identifiable information in your profile by logging in and editing such information on your dashboard. If you decide to delete all of your information, we may cancel your account. We may retain an archived copy of your records as required by law or for reasonable business purposes.</p>",
                    "<p>Due to the nature of the Service, except to assist Clients with certain limited technical problems or as otherwise legally compelled, we will not access any of the Content that you upload to the Service.</p>",
                    "<p>Some Personally Identifiable Information may also be provided to intermediaries and third parties who assist us with the Service, but who may make no use of any such information other than to assist us in providing the Service. Except as otherwise provided in this Privacy Policy, however, we will not rent or sell your Personally Identifiable Information to third parties.</p>",

                    "<div class='mb-5'></div>"
                ]}
                infoLastUpdated="Last updated Dec 29, 2022"
            />

            <Divider />

            <Footer />
        </>
    )
}