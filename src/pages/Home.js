import Text from "../components/Text";
import HtmlReveal from "../components/HtmlReveal";
import VisualTearElement from "../components/VisualTearElement";

const Home = () => (<>
  <div className="c-wrapper c-wrapper--accent u-padding-bottom-xlarge">
    <Text type="title" modifier="medium" className="u-margin-bottom-xtiny">
      Andrew McIntee <span className="u-subtler" style={{whiteSpace: 'nowrap', marginLeft: 5}}>( mac∙ent∙tee )</span>
    </Text>
    <Text type="paragraph" modifier="xlarge">
      Thanks for stopping by, <br/>welcome&nbsp;to&nbsp;my&nbsp;website&nbsp;<span className="c-emoji c-emoji--large u-animate-wave u-hide--hand">👋</span>
      {/* Welcome to my lil’&nbsp;spot&nbsp;on&nbsp;the&nbsp;web&nbsp;<span className="c-emoji c-emoji--large u-animate-wave">👋</span> */}
    </Text>
    <div class="c-avatar"><div class="c-avatar__element" /></div>
    <Text type="title" modifier="small" className="u-margin-top">Professionally</Text>
    <Text type="paragraph">
      <span className="u-highlight">I’m a software engineer and product designer</span>, with over <span className="u-highlight">thirteen years</span> of <span className="u-highlight">building web software</span>.
    </Text>
    <Text type="title" modifier="small" className="u-margin-top">Experience</Text>
    <Text type="paragraph">
      For ten years I specialized on the client&#8209;side. I designed and built software user interfaces for organizations: from scrappy startups to large SAAS softwares. BMW, Outdoor&nbsp;Channel, and Home&nbsp;Depot are a few I can tout.
    </Text>
    <Text type="paragraph">
      For the last four years I’ve <span className="u-highlight">focused server&#8209;side</span>. I plan, build, and measure features for multi&#8209;billion GMV software products in Ruby, Javascript, and Go.
    </Text>
    <Text type="title" modifier="small" className="u-margin-top">For who?</Text>
    <Text type="paragraph">
      Currently, I’m a <span className="u-highlight">senior software engineer at</span> <a href="https://kajabi.com" rel="noopener noreferrer nofollow" target="_blank" className="c-link">Kajabi</a>. I build the learning management system and features like online course builders, media managers, website builders, video conferencing, & online communities.
    </Text>
    <Text type="title" modifier="small" className="u-margin-top">Working from&hellip;</Text>
    <Text type="paragraph">
      I'm a long-time traveling remote worker, <span className="u-highlight">from the southeast US.</span> I call Atlanta home. Now post‑pandemic, I am once again living from locations unknown with my remote-working partner and friends.
    </Text>
    <VisualTearElement
      styleIndex={0}
      flipY={false}
      colorVar='--c-background-primary'
      style={{
        height: 10,
        bottom: 0
      }}
    />
  </div>
  <div className="c-wrapper u-padding-top-large u-padding-bottom-none">
    <Text type="title" modifier="medium" className="u-margin-top">Open to opportunities</Text>
    <Text type="paragraph">
      As a software engineer and product designer switch&#8209;hitter,
      I’m most at home in design-lead, cross&#8209;functional software engineering teams.
    </Text>
  </div>
  <div className="c-wrapper c-wrapper--table-bleed u-padding-top-small u-padding-bottom-small">
    <HtmlReveal tag="table" className="u-margin-bottom">
      <thead>
        <tr>
          <th scope="col">&nbsp;</th>
          <th scope="col">&nbsp;</th>
          <th scope="col">&nbsp;</th>
          {/* <th scope="col"/> */}
          {/* <th scope="col"></th> */}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            2020 <span className="arrow-left">&larr;</span> present
          </th>
          <td className="no-wrap">Software engineer</td>
          <td class="u-hide--lap"><span className="c-emoji">🛠</span></td>
          {/* <td>Ruby, Javascript, and Go</td> */}
          {/* <td /> */}
        </tr>
        <tr>
          <th scope="row">
            <span class="arrow-down">&darr;</span>
            2016
          </th>
          <td className="no-wrap">Design systems engineer</td>
          <td class="u-hide--lap"><span className="c-emoji">🔩</span></td>
          {/* <td>Defining and nurturing the first design system, delivered through a collection of frontend packages and ruby gem</td> */}
          {/* <td /> */}
        </tr>
        <tr>
          <th scope="row">
            <span class="arrow-down">&darr;</span>
            2014
          </th>
          <td className="no-wrap">Frontend engineer</td>
          <td class="u-hide--lap"><span className="c-emoji">🎛</span></td>
          {/* <td>Frontend subject matter expert ith emphasis on UI engineering and design systems for web software</td> */}
          {/* <td /> */}
        </tr>
        <tr>
          <th scope="row">
            <span class="arrow-down">&darr;</span>
            2012
          </th>
          <td className="no-wrap">UI &amp; product designer</td>
          <td class="u-hide--lap"><span className="c-emoji">🍒</span></td>
          {/* <td>Frontend subject matter expert ith emphasis on UI engineering and design systems for web software</td> */}
          {/* <td /> */}
        </tr>
        <tr>
          <th scope="row">
            <span class="arrow-down">&darr;</span>
            2009
          </th>
          <td className="no-wrap">Advertising web developer</td>
          <td class="u-hide--lap"><span className="c-emoji">🛀</span></td>
          {/* <td>Advertising</td> */}
          {/* <td /> */}
        </tr>
      </tbody>
      <tfoot>
        {/* <tr> */}
          {/* <td></td> */}
          {/* <td>
            <span className="c-paragraph c-paragraph--sans-large">
              <span className="c-emoji c-emoji--small">🔗</span><a href="https://www.linkedin.com/in/andrewmcintee/" rel="noopener noreferrer nofollow" target="_blank" className="c-link c-link--arrow-remote">LinkedIn</a>
            </span>
          </td> */}
          {/* <td></td> */}
          {/* <td>
            <span className="c-paragraph c-paragraph--sans-large">
              <span className="c-emoji c-emoji--small">🔗</span><a href="https://2019.andrew.mn/#/case-studies" rel="noopener noreferrer nofollow" target="_blank" className="c-link c-link--arrow-remote">Case studies (2019)</a>
            </span>
          </td> */}
        {/* </tr> */}
      </tfoot>
    </HtmlReveal>
  </div>
  <div className="c-wrapper u-padding-top-none">
    <Text type="paragraph" className="u-margin-top u-margin-bottom-large">
      Thanks for visiting. <span className="u-highlight">Have a great day</span>. <span className="c-emoji">🌿</span>
    </Text>
  </div>
</>);


export default Home;
