import Text from "../components/Text";
import VisualTearElement from "../components/VisualTearElement";

const Intro = () => (<>
  <div className="c-wrapper c-wrapper--noise u-margin-bottom-large">
    <Text type="paragraph" modifier="sans-medium" className="u-margin-none">
      Andrew McIntee <span className="u-subtler" style={{whiteSpace: 'nowrap', marginLeft: 5}}>( mac∙ent∙tee )</span>
    </Text>
    <Text type="paragraph" modifier="xlarge">
      Hello, welcome to&nbsp;my&nbsp;website&nbsp;<span className="c-emoji c-emoji--large u-animate-wave">👋</span>
      {/* Welcome to my lil’&nbsp;spot&nbsp;on&nbsp;the&nbsp;web&nbsp;<span className="c-emoji c-emoji--large u-animate-wave">👋</span> */}
    </Text>
    <Text type="title" modifier="small" className="u-margin-top">Professionally</Text>
    <Text type="paragraph">
      <span className="u-highlight">I’m a software engineer & product designer</span>, pushing <span className="u-highlight">thirteen years</span> of <span className="u-highlight">building web software</span>. For most of those years, I specialized on the client-side. I’m now <span className="u-highlight">focused server-side</span>, bringing my <span className="u-highlight">user experience engineering & design systems expertise</span> with me.
    </Text>
    <Text type="title" modifier="small" className="u-margin-top">For whom</Text>
    <Text type="paragraph">
      Currently, I’m a <span className="u-highlight">software engineer at</span> <a href="https://kajabi.com" rel="noopener noreferrer nofollow" target="_blank" className="c-link">Kajabi</a>. I build the learning management system and features like online course builders, media managers, website builders, video coaching, & online communities.
    </Text>
    <Text type="title" modifier="small" className="u-margin-top">Location</Text>
    <Text type="paragraph">
      I'm a long-time traveling remote worker, <span className="u-highlight">based from Atlanta.</span> Now post‑pandemic, I am once again living from locations unknown with my remote-working partner and friends.
    </Text>
    <Text type="paragraph">
      Thanks for visting. <span className="u-highlight">Have a great day</span>. <span className="c-emoji">🌿</span>
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
</>);


export default Intro;
