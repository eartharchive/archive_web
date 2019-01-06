<template>
    <div class="follow-page">

        <header class="title">
            <h1>Follow <span>Archived.Earth</span></h1>
        </header>

        <div class="field">
            <b-input placeholder="Enter your email address" rounded></b-input>
        </div>

        <div class="btn">
            <a class="button is-rounded">Submit</a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

.follow-page{
    padding-top: 25%;
}
.follow-page .title h1{
    font-weight: 200;
    font-size: 53px;
    text-align: center;
}
.follow-page .title h1 span{
    display: block;
    font-weight: 600;
    font-size: 60px;
}

.follow-page .field{
    margin: 0 10% 3% 10%;

}

.follow-page .field input{
    font-size: 30px;
    border-color: #969696;
    border-width: 2px;
    box-shadow: none;
}

.follow-page .btn .button{
    border-color: #969696;
    border-width: 2px;
    font-size: 30px;
}

@media screen and (max-width:768px) {
	.follow-page .title h1{
        font-size: 37px;
    }
    .follow-page .title h1 span{
        font-size: 40px;
    }
    .follow-page .field input{
        font-size: 24px;
    }
    .follow-page .btn .button{
        font-size: 24px;
    }
}

</style>
