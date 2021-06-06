import './Faq.css'

function Faq() {
  return (
    <div className="Faq-contanier">
      <h2>FAQ</h2>
      <div className="Faq">
        <span id="outer">
          <h3> How to Level Up? </h3>
          <p> To Level-up earn 6 stars. </p>
          <code>
            <p> {' if (stars == 6) {'} </p>
            <p> &nbsp; &nbsp; {' level++;'}</p>
            <p> &nbsp; &nbsp; {'stars = 0;'} </p>
            <p>{'}'}</p>
          </code>
        </span>

        <div id="outer">
          <h3>How to Earn Stars? </h3>
          <p>Complete daily target for 1 day = 1 star</p>
          <p> 2 consecutive days = 2 stars </p>
          <p> .... </p>
          <p> 6 consecutive days = 6 stars </p>
          <span id="bold"> 1 day off, stars become zero </span>
        </div>

        <div id="outer">
          <h3> What are my Daily Task? </h3>
          <p>
            {' '}
            On <span id="bold">level 0</span> solve minimum of{' '}
            <span id="bold">three</span> problems per day{' '}
          </p>
          <p>
            {' '}
            On <span id="bold">level 1</span> solve minimum of{' '}
            <span id="bold">four</span> problems per day{' '}
          </p>
          <p>
            {' '}
            On <span id="bold">level 2</span> solve minimum of{' '}
            <span id="bold"> five</span> problems per day{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Faq
