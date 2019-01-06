<template>
    <nav class="nav-bar">
        <div class="logo">
            <router-link to="/">
                <img src="/assets/archive-earth-logo.svg" alt="archive-earth-logo">
            </router-link>
            
        </div>
        <ul class="menu">
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/news">News</router-link></li>
            <li><router-link to="/follow">Follow</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

.nav-bar{
    width: 242px;
    overflow: hidden;
    position: absolute;
    height: 100%;
    /*
    background-color: antiquewhite;
    opacity: .5;
    */
    z-index: 10;
}
.nav-bar .logo{
    height: 250px;
    width: 100%;
    float: left;
    clear: both;
    display: flex;
    align-items: center;
}

.nav-bar .menu{
    float: left;
    clear: both;
    width: 100%;
    text-align: left;
}

.nav-bar .menu li a:hover, .nav-bar .menu li a.router-link-active{
    background-color: #ccc;
}

.nav-bar .menu li a{
    color: rgba(26, 51, 21, 1.0);
    font-size: 37px;
    width: 90%;
    display: block;
    margin-right: 10%;
    padding-left: 10%;
}

.nav-bar .menu li {
    margin-bottom: 20px;
}

@media screen and (max-width:1471px) {
    .nav-bar{
        width: 200px;
    }

    .nav-bar .menu li a{
        font-size: 30px;
    }
}


@media screen and (max-width:1279px) {
    .nav-bar{
        width: 150px;
    }

    .nav-bar .menu li a{
        font-size: 24px;
    }
}


</style>
