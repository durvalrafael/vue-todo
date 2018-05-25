<template>
    <section class="bgimage">
    <div class="container-fluid">
        <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h5>Hello, world! Full width Hero-unit header</h5>
            <p>This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
            <p><a href="#" class="btn btn-primary btn-large">Learn more »</a></p>
        </div>
        </div>
    </div>
    </section>
    <!-- <section class="container">
        <div class="row">
            <header>
                <h1>Your Todos</h1>
                <small>Sep 5, 2018</small>
            </header>
            <ul>
                <li>
                    <h1>Lorem ipsum</h1>
                    <h2>consectetur adipiscing elit.</h2>
                </li>
            </ul>
        </div>
    </section> -->
</template>

<script>
    export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },
    };
</script>
<style scoped>
.bgimage {
  width:100%;
  height:200px;
  background: url('https://images.unsplash.com/photo-1514845246609-9858193f9f09?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1f59512bf424f71388f847ebf75fe938&auto=format&fit=crop&w=1350&q=80');
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
  background-attachment: fixed;
}
.bgimage h5 {
  color:white;
  text-shadow:2px 2px #333;
}
</style>


