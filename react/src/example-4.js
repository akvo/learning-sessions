/** @jsx React.DOM */

var Carousel = ReactBootstrap.Carousel;
var CarouselItem = ReactBootstrap.CarouselItem;

var images = [
  {src: "img/img_01.jpg",
   title: "Niala",
   description: "This is our 3 year old dalmatian"},
  {src: "img/img_02.jpg",
   title: "Laika",
   description: "This is our 5 year old mutt. She's part Labrador and part Norweagan elk hound"},
  {src: "img/img_03.jpg",
   title: "Niala jumping",
   description: ""},
  {src: "img/img_04.jpg",
   title: "Arthur not jumping",
   description: "Arthur is my sisters Golden Retriever"},
  {src: "img/img_05.jpg",
   title: "Winter is coming",
   description: ""},
  {src: "img/img_06.jpg",
   title: "Corgi!!!",
   description: "Corgies are awesome small creatures"},
  {src: "img/img_07.jpg",
   title: "Laika & Sonic",
   description: ""},
  {src: "img/img_08.jpg",
   title: "Arthur looking happy",
   description: ""},
  {src: "img/img_09.jpg",
   title: "Niala",
   description: ""},
  {src: "img/img_10.jpg",
   title: "Fight!",
   description: "Laika & Niala doing there daily dance session"}];

var MyCarousel = React.createClass({
  render: function() {
    var carouselItems = this.props.items.map(function(item) {
      return (
        <CarouselItem>
          <img  src={item.src}/>
          <div className="carousel-caption">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </CarouselItem>
      )
    });
    return <Carousel>{carouselItems}</Carousel>;
  }
});

React.renderComponent(<MyCarousel items={images}/>, document.getElementById('app'));
