<script setup>
defineProps({
    imgUrl: {
        typee: String,
        require: true,
    },
    productName: {
        typee: String,
        require: true,
    },
    gender: {
        typee: String,
        require: true,
    },
    color: {
        typee: String,
        require: true,
    },
    size: {
        typee: String,
        require: true,
    },
    price: {
        typee: String,
        require: true,
    },
});
</script>

<template>
    <article class="flex-col">
        <img src="../assets/images/clothesImg.jpg" alt="" />
        <div class="content-card flex-col">
            <h2>{{ productName }}</h2>
            <h3>{{ gender }}</h3>
            <p class="price">{{ price }} €</p>
            <div class="flex-row infos">
                <p>{{ size }}</p>
                <p>{{ color }}</p>
            </div>
        </div>
    </article>
</template>

<style scoped lang="scss">
@use "../assets/variables.scss" as *;

article {
    padding: 24px;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: 20vw;
    overflow: hidden;
    gap: 20px;

    img {
        width: 100%;
        border-radius: 8px;
    }

    .content-card {
        width: 100%;
        align-items: flex-start;
        h2 {
            text-transform: uppercase;
            font-size: 1.4rem;
        }
        h3 {
            font-weight: 300;
            margin-top: -5px;
            font-size: 0.8rem;
        }
        .price {
            font-weight: 600;
            margin-top: 5px;
            font-size: 1.2rem;
        }

        .infos {
            gap: 10px;
            margin-top: 15px;
            p {
                background-color: $green-light;
                padding: 8px 24px;
                border-radius: 50px;
                text-transform: uppercase;
                font-size: 0.8rem;
            }
        }
    }

    @media (max-width: 1024px) {
        width: 25vw;
    }
    @media (max-width: 768px) {
        width: 40vw;
    }
    @media (max-width: 480px) {
        width: 80vw;
    }
}
</style>
