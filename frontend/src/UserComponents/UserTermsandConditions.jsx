import React,{useEffect} from 'react';

const termsData = [
    {
        id: 1,
        title: 'General Terms & use of the Site',
        content: [
            "U-Pack doesn’t sell any ‘pre-packed commodity’ and doesn’t provide specific labelling on the products other than as shown on the website. Also our products are made for business industrial and institutional purpose. Further, U-Pack's products are not intended for retail customers and are not available for resale purposes. The packaging provided by U-Pack on the products are solely for safe transport and handling purpose during courier and transit.",
            "Website Usage: You may use the Site only in accordance with and subject to these Terms of Use and the Site's Privacy Policy (the 'Privacy Policy'). Once you complete and submit your registration, you have opted in to receive email communication from us. You may not use the Site for any purpose that is unlawful or prohibited by these Terms of Use, or to solicit the performance of any illegal activity or other activity which infringes the rights of UPack or others. Notwithstanding any other rights or restrictions in these Terms of Use, you may not use this Site to: (a) transmit via or through the Site any information, data, text, images, files, links, or software except in connection with your authorized use of this Site or otherwise in response to specific requests for information by us; (b) introduce to the Site or any other computer or web site viruses, worms, Trojan horses and/or harmful code; (c) obtain unauthorized access to any computer system; (d) impersonate any other person, including but not limited to, a registered user of this Site or an employee of UPack; (e) invade the privacy or violate any personal or proprietary right (including intellectual property rights) of any person or entity; (f) misrepresent the identity of a user or use a false e-mail address; (g) tamper with or obtain access to this Site or any component of this Site; (h) conduct fraudulent activities; or (i) collect or harvest information regarding other users of the Site for any reason whatsoever, including, without limitation, for sending such users unsolicited commercial e-mail.",
            "You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account or password. You agree to immediately notify us in the event of any unauthorized use of your account or other breach of security."
        ]
    },
    {
        id: 2,
        title: 'Accuracy of Content; Limitations on Quantity',
        content: [
            "The information on this Site is believed to be complete and reliable; however, the information may contain typographical errors, pricing errors, and other errors or inaccuracies. Errors will be corrected as soon as practicable. We reserve the right to: (i) revoke any stated offer; (ii) correct any errors, inaccuracies or omission; and (iii) make changes to prices, content, promotion offers, product descriptions or specifications, or other information without obligation to issue any notice of such changes (including after an order has been submitted, acknowledged, shipped or received). We also reserve the right to limit quantities (including after an order has been submitted and/or acknowledged) and to revise, suspend or terminate an event, promotion at any time without notice. The inclusion of any products or services on this Site at a particular time does not guarantee that the products or services will be available."
        ]
    },
    {
        id: 3,
        title: 'Credit Card Payment',
        content: [
            "In a credit card transaction, you must use your own credit card. UPack will not be liable for any credit card fraud. The liability to use a card fraudulently will be on the user and the onus to 'prove otherwise' shall be exclusively on the user."
        ]
    },
    {
        id: 4,
        title: 'Proprietary Rights',
        content: [
            "You acknowledge and agree that the content, materials and other components (including but not limited to logos, graphics, button icons and page headers) available on the Site are the property of UPack and are protected by copyrights, trademarks, service marks or other proprietary rights and laws. You agree not to sell, license, rent, modify, distributed, copy, reproduce, transmit, publicly display, publicly perform, publish, adapt, edit or create derivative works from content or materials on the Site. Use of the content and materials for any purpose not expressly permitted in these Terms of Use is prohibited. UPack relies upon a network of independent vendors who supply some of the goods advertised on the Site and, in some cases, drop ship them directly to you. We are not liable for any infringement of copyrights, trademarks, trade dress or other proprietary or intellectual property rights arising out of content posted on or transmitted through the Site, or items advertised on the Site, by our vendors."
        ]
    },
    {
        id: 5,
        title: 'Submissions',
        content: [
            "Any comments, ideas, notes, postings, messages, suggestions or other communications or information posted on the Site, submitted to UPack, or otherwise communicated in connection with your use of the Site (collectively, 'Submissions') shall be and remain the exclusive property of UPack with no further compensation to you. As such, we will own exclusively all such rights, titles and interests and shall not be limited in any way in its use, commercial or otherwise, of any Submissions. UNDER NO CIRCUMSTANCES SHALL ANY DISCLOSURE OF ANY SUBMISSION TO UPack BE SUBJECT TO ANY OBLIGATION OF CONFIDENTIALITY OR EXPECTATION OF COMPENSATION OR ATTRIBUTION. BY SUBMITTING ANY SUBMISSION TO UPack, YOU ARE WAIVING ANY AND ALL RIGHTS THAT YOU MAY HAVE IN THE SUBMISSION AND YOU AGREE THAT ANY SUBMISSIONS BY YOU WILL NOT VIOLATE ANY RIGHT OF ANY THIRD PARTY, INCLUDING COPYRIGHT TRADEMARK, PRIVACY OR OTHER PERSONAL OR PROPRETARY RIGHTS. YOU ALSO AGREE THAT NO SUBMISSION BY YOU WILL BE OR CONTAIN LIBELOUS OR OTHERWISE UNLAWFUL, ABUSIVE OR OBSCENE MATERIAL. YOU ARE AND SHALL REMAIN SOLEY RESPONSIBLE FOR THE CONTENT OF ANY SUBMISSIONS YOU MAKE. YOU REPRESENT AND WARRANT TO UPack THAT UPack IS FREE TO IMPLEMENT THE SUBMISSION IF IT SO DESIRES, AS PROVIDED OR AS MODIFIED BY UPack, WITHOUT OBTAINING PERMISSION OR LICENSE FROM ANY THIRD PARTY. UPack takes no responsibility and assumes no liability for any content submitted or posted by you or any third party."
        ]
    },
    {
        id: 6,
        title: 'Links to Third-Party Web Sites; No Implied Endorsements',
        content: [
            "This Site may contain links to other web sites on the Internet. You acknowledge that we have no control over such web sites and that we are not responsible for the accuracy, content, legality or any other aspect of any linked web site. In no event shall any reference to any third party, third party website or third party product or service be construed as an approval or endorsement by us of that third party, third party website or of any product or service provided by a third party"
        ]
    },
    {
        id: 7,
        title: 'Indemnification',
        content: [
            "By using this Site, you agree to indemnify, hold harmless and defend UPack, its parent, subsidiaries and affiliates, and their respective officers, directors, employees, successors, agents, subsidiaries, partners, contractors, vendors, manufacturers, distributors, representatives and affiliates from any claims, damages, losses, liabilities, and all costs and expenses of defense, including but not limited to, attorneys' fees, resulting directly or indirectly from a claim (including without limitation, claims made by third parties for infringement of intellectual property rights) by a third party that arises in connection with (i) your use or misuse of the Site; (ii) your breach of the Terms of Use; or (iii) your violation of any law or the rights of a third party. You agree to cooperate as fully as reasonably required in the defense of any claim. UPack reserves the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you."
        ]
    },
    {
        id: 8,
        title: 'Disclaimer of Warranty',
        content: [
            "THE SITE, ITS CONTENT AND ALL TEXT, IMAGES, MERCHANDISE AND OTHER INFORMATION ON, ACCESSIBLE FROM OR AVAILABLE THROUGH THIS SITE ARE PROVIDED ON AN 'AS AVAILABLE' AND 'AS IS' BASIS WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. SPECIFICALLY, BUT WITHOUT LIMITATION, UPack DOES NOT WARRANT THAT: (I) THE INFORMATION AVAILABLE ON THIS SITE IS FREE OF ERRORS; (II) THE FUNCTIONS CONTAINED ON THIS SITE WILL BE UNINTERRUPTED OR FREE OF ERRORS; (III) DEFECTS WILL BE CORRECTED, OR (IV) THIS SITE OR THE SERVER(S) THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS"
        ]
    },
    {
        id: 9,
        title: 'Limitation of Liability',
        content: [
            "IN NO EVENT SHALL UPack, ITS PARENT, SUBSIDIARIES OR AFFILIATES OR THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, SUCCESSORS, SUBSIDIARIES, DIVISIONS, DISTRIBUTORS, SUPPLIERS, AFFILIATES OR THIRD PARTIES PROVIDING INFORMATION ON THIS SITE BE LIABLE TO ANY USER OF THE SITE OR ANY OTHER PERSON OR ENTITY FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE, CONSEQUENTIAL OR EXEMPLARY DAMAGES (INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, LOSS OF DATA OR LOSS OF USE) ARISING OUT OF THE USE OR INABILITY TO USE THE SITE OR ANY INFORMATION CONTAINED THEREON OR STORED OR MAINTAINED BY UPack, WHETHER BASED UPON WARRANTY, CONTRACT, TORT, OR OTHERWISE, EVEN IF REEBONZ HAS BEEN ADVISED OF OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF SUCH DAMAGES OR LOSSES. IN NO EVENT SHALL THE TOTAL LIABILITY OF UPack, ITS PARENT, SUBSIDIARIES OR AFFILIATES OR THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, SUCCESSORS, SUBSIDIARIES, DIVISIONS, DISTRIBUTORS, SUPPLIERS, AFFILIATES OR THIRD PARTIES PROVIDING INFORMATION ON THIS SITE TO YOU FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION RESULTING FROM YOUR USE OF THIS SITE, WHETHER IN CONTRACT, TORT (INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE) OR OTHERWISE, EXCEED THE AMOUNT YOU PAID TO UPack IN CONNECTION WITH THE APPLICABLE EVENT, PROMOTION OR EVENT GIVING RISE TO SUCH LIABILITY. WITHOUT LIMITING THE FOREGOING, IN NO EVENT SHALL UPack, ITS PARENT, SUBSIDIARIES OR AFFILIATES OR THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, SUCCESSORS, SUBSIDIARIES, DIVISIONS, DISTRIBUTORS, SUPPLIERS, AFFILIATES OR THIRD PARTIES PROVIDING INFORMATION ON THIS SITE HAVE ANY LIABILITY FOR ANY DAMAGES OR LOSSES ARISING OUT OF OR OTHERWISE INCURRED IN CONNECTION WITH THE LOSS OF ANY DATA OR INFORMATION CONTAINED IN YOUR ACCOUNT OR OTHERWISE STORED BY OR ON BEHALF OF UPack.",
            "YOU HEREBY ACKNOWLEDGE THAT THE PRECEDING PARAGRAPH SHALL APPLY TO ALL CONTENT, MERCHANDISE AND SERVICES AVAILABLE THROUGH THE SITE. BECAUSE SOME COUNTRIES DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, IN SUCH COUNTRIES SOME OR ALL OF THE ABOVE DISCLAIMERS OR EXCLUSIONS MAY NOT APPLY AND LIABILITY WILL BE LIMITED TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW."

        ]
    },
    {
        id: 10,
        title: 'International Use',
        content: [
            "We make no representation that information on this Site is appropriate or available for use outside the Asia region. Those who choose to access this Site from outside the Asia region do so on their own initiative and are responsible for compliance with local laws, if and to the extent local laws are applicable."
        ]
    },
    {
        id: 11,
        title: 'Risk of Loss',
        content: [
            "The items purchased from our Site are shipped by a third party carrier pursuant to a shipment contract. As a result, risk of loss and title for such items pass to you upon our delivery to the carrier."
        ]
    },
    {
        id: 12,
        title: ' U-Pack Affiliates',
        content: [
            "By using this Site, you agree to indemnify, hold harmless and defend UPack, its parent, subsidiaries and affiliates, and their respective officers, directors, employees, successors, agents, subsidiaries, partners, contractors, vendors, manufacturers, distributors, representatives and affiliates from any claims, damages, losses, liabilities, and all costs and expenses of defense, including but not limited to, attorneys' fees, resulting directly or indirectly from a claim (including without limitation, claims made by third parties for infringement of intellectual property rights) by a third party that arises in connection with (i) your use or misuse of the Site; (ii) your breach of the Terms of Use; or (iii) your violation of any law or the rights of a third party. You agree to cooperate as fully as reasonably required in the defense of any claim. UPack reserves the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you."
        ]
    },
    {
        id: 13,
        title: 'Unavailability of Site; Termination; Fraud',
        content: [
            "We may alter, suspend, or discontinue this Site in whole or in part, at any time and for any reason, without notice or cost. We may, in our sole discretion, terminate or suspend your use or access to all or part of the Site or your account or membership, for any reason, including without limitation, breach of these Terms of Use. If at any time, we notify you that your access to and /or use of the Site or your account is terminated, you must cease and desist from all such access and/or use immediately. We reserve the right to cancel, delay, refuse to ship, or recall from the shipper any order if fraud is suspected. In the event these Terms of Use or your membership or account are terminated, the restrictions regarding intellectual property matters, the representations and warranties, indemnities, and limitations of liabilities set forth herein (as well as any other of your obligations which by their nature should survive termination) will survive termination."
        ]
    },
    {
        id: 14,
        title: ' Copyright Infringement; Notice and Take Down Procedures',
        content: [
            "If you believe that any materials on this Site infringe your copyright, you may request that they be removed. This request must bear a signature (or electronic equivalent) of the copyright holder or an authorized representative and must: (a) identify the allegedly infringing materials; (b) indicate where on the Site the infringing materials are located; (c) provide your name and contact information; (d) state that you have a good faith belief that the materials are infringing; (e) state that the information in your claim is accurate; and (f) indicate that 'under penalty of perjury' you are the lawful copyright owner or are authorized to act on the owner's behalf. With regards to copyright issues, kindly email to: sales@upack.in. U-Pack does not allow it's products to be resold under different brand name on other online e-commerce portals without prior written permission."
        ]
    },
    {
        id: 15,
        title: 'Miscellaneous',
        content: [
            "Unless otherwise specified herein, these Terms of Use, together with the Privacy Policy, constitute the entire agreement between you and UPack with respect to the Site and supersede all prior or contemporaneous communications and proposals (whether oral, written or electronic) between you and UPack with respect to the Site. If any part of these Terms of Use is held invalid or unenforceable, that portion shall be construed in a manner consistent with applicable law to reflect, as nearly as possible, the original intentions of the parties, and the remaining portions shall remain in full force and effect. The failure of UPack to act with respect to a breach by you or others does not waive UPack's right to act with respect to subsequent or similar breaches. UPack's failure to exercise or enforce any right or provision of these Terms of Use shall not constitute a waiver of such right or provision. The section headings contained in these Terms of Use are included for convenience only and shall not limit or otherwise affect the terms of these Terms of Use. U-Pack does not allow it's products to be resold under different brand name on other online e-commerce portals without prior written permission."
        ]
    }
];

function UserTermsandConditions() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='px-5 pb-16 pt-5 lg:px-16 xl:px-32 space-y-4'>
            <p className='text-4xl py-2'><span className='font-bold'>Terms</span> & Conditions</p>
            <div className='space-y-4'>
                {termsData.map(term => (
                    <div key={term.id}>
                        <p className='font-bold py-2 text-lg'>{term.id}. {term.title}</p>
                        <div className='space-y-4'>
                            {term.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserTermsandConditions;
