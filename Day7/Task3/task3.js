let new_window;

function begin() {
  new_window = window.open("about:blank", "_blank", "width=1200,height=1200");
  setTimeout(delay, 3000);
}

function delay() {
    new_window.document.write(`
<html>
    <head>
        </head>
    <body>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto odit ipsam eum id, esse cum sunt optio, quos blanditiis numquam sint expedita<br>
        error alias doloremque tenetur maxime incidunt dicta illum?</p>
    </body>
</html>
    `);
}