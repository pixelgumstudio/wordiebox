// app/head.js
export default function Head() {
    return (
      <>
        <script
          data-grow-initializer=""
          dangerouslySetInnerHTML={{
            __html: `!(function(){window.growMe||((window.growMe=function(e){window.growMe.push(e)}),(window.growMe=[]));var e=document.createElement("script");(e.type="text/javascript"),(e.src="https://faves.grow.me/main.js"),(e.defer=!0),e.setAttribute("data-grow-faves-site-id","U2l0ZTo2MDZlMjhjNC1mZTgxLTQ4ZDMtODdjOS1kOThhZDJkNWY4Njg=");var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();`
          }}
        />
      </>
    )
  }
  