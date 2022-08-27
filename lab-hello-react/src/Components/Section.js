function Section () {
    return (
      <nav>
        <figure>
        <img
          id="nav-img"
          src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"
          alt="Declarative"
        />
       <figcaption> <h5>Declarative</h5> React makes it painless to create interactive UIs. </figcaption>
        </figure>


        <figure>
        <img
      src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
      alt="Components"
    /> <figcaption> <h5>Components</h5> Build encapsulated componentes that mange their state.
    </figcaption>
        </figure>
    
        <figure>
    <img
      src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
      alt="Single-Way"
    />

    <figcaption> <h5>Single-Way</h5> A set of immutable values are passed to the componente's.
    </figcaption>
        </figure>

        <figure>
    <img
      src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"
      alt="JSX"
    />
    <figcaption> <h5>JSX</h5> Statically-typed, designed to run on modern browsers.
    </figcaption>
        </figure>
      </nav>
    );
  }
 
  export default Section;