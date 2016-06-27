import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';

let repeat = () => {
  window.confirm("Are you sure?");
  repeat();
};

let divElement = <div className="ugly">
    <div className="row">
      <div className="small-1 small-offset-11 columns text-right close">
        <i className="fa fa-times" aria-hidden="true" onClick={
          event => {
            repeat();
          }
        }/>
      </div>
      <div className="small-12 columns text-center">
        <h3>
          You have won tickets to see Taylor Swift!!
        </h3>
        <p>
          Please enter your email so we can send you the tickets
        </p>
      </div>
    </div>
    <div className="row small-10 small-offset-1 columns">
      <form
        onSubmit={
          event => {
            event.preventDefault();
            console.log('Form Submitted');
          }
        }
      >
        <div className="input-group">
          <input className="input-group-field" type="text" defaultValue="Your email here" />
          <div className="input-group-button">
            <input id="button-new" type="submit" value="CLAIM YOUR PRIZE"/>
          </div>
        </div>
      </form>
    </div>
</div>;

ReactDOM.render(
  divElement,
  document.getElementById('annoying-ad')
);
