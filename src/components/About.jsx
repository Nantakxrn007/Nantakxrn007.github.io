const facts = [
  ['Full name', 'Nantakorn Necamanurak'],
  ['Nickname', 'Non'],
  ['Age', '22'],
  ['University', 'Thammasat University'],
  ['Faculty', 'College of Interdisciplinary Studies'],
  ['Major', 'Data Science and Innovation'],
  ['Year', '4th year (2026 – present)'],
  ['GPA', '3.84 / 4.00'],
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">
          About <span className="hl">Me</span>
        </h2>

        <div className="about__grid">
          <div className="about__card">
            <div className="about__avatar">
              <img src="about.webp" alt="Nantakorn" />
            </div>
            <h3>Nantakorn Necamanurak</h3>
            <p>I'm interested in research in Machine Learning &amp; Data Science</p>
          </div>

          <div className="about__body">
            <p className="about__summary">
              Passionate about advancing Data Science to contribute to a better
              Thailand. I aspire to become a researcher developing data-driven and AI
              methods for real-world challenges across industrial, healthcare,
              financial, and public sectors, bridging research and practical
              applications to create meaningful impact for society.
            </p>

            <dl className="about__facts">
              {facts.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>
                    {k === 'University' && <img className="about__logo" src="logos/tu.png" alt="Thammasat University logo" />}
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
