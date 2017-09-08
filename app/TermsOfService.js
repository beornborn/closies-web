//@flow
import React from 'react'
import { Container, Title, Header } from './PrivacyPolicy.style'

export default class TermsOfService extends React.Component {
  render() {
    return <Container>
      <Title>Closies Terms of Service</Title>

      <Header>1. Terms</Header>
      <p>
        By accessing the website at <a href='http://closies.co'>http://closies.co</a>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
      </p>
      <Header>2. Use License</Header>
      <ol>
        <li>
          Permission is granted to temporarily download one copy of the materials (information or software) on Closies' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          <ol type='i'>
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on Closies' website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ol>
        </li>
        <li>
          This license shall automatically terminate if you violate any of these restrictions and may be terminated by Closies at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
        </li>
      </ol>
      <Header>3. Disclaimer</Header>
      <ol>
        <li>
          The materials on Closies' website are provided on an 'as is' basis. Closies makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </li>
        <li>
          Further, Closies does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
        </li>
      </ol>
      <Header>4. Limitations</Header>
      <p>
        In no event shall Closies or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Closies' website, even if Closies or a Closies authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
      </p>
      <Header>5. Accuracy of materials</Header>
      <p>
        The materials appearing on Closies website could include technical, typographical, or photographic errors. Closies does not warrant that any of the materials on its website are accurate, complete or current. Closies may make changes to the materials contained on its website at any time without notice. However Closies does not make any commitment to update the materials.
      </p>
      <Header>6. Links</Header>
      <p>
        Closies has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Closies of the site. Use of any such linked website is at the user's own risk.
      </p>
      <Header>7. Modifications</Header>
      <p>
        Closies may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
      </p>
      <Header>8. Governing Law</Header>
      <p>
        These terms and conditions are governed by and construed in accordance with the laws of Ukraine and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
      </p>
    </Container>
  }
}
