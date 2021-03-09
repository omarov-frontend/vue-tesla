<template>
    <header class="header">
        <div class="container header__inner">
            <a class="header__logo" href="#">
                <img src="../../assets/img/header-logo.png" alt="Tesla">
            </a>
            <nav class="nav">
                <a
                        v-for="(item, index) in menu"
                        :key="index"
                        class="nav__link nav__link_active"
                        href="#"
                >{{ item.modelS }}</a>
                <a
                        v-for="(item, index) in menu"
                        :key="index"
                        class="nav__link"
                        href="#"
                >{{ item.modelX }}</a>
                <a
                        v-for="(item, index) in menu"
                        :key="index"
                        class="nav__link"
                        href="#"
                >{{ item.model3 }}</a>
                <a
                        v-for="(item, index) in menu"
                        :key="index"
                        class="nav__link"
                        href="#"
                >{{ item.modelRoadster }}</a>
                <a
                        v-for="(item, index) in menu"
                        :key="index"
                        class="nav__link"
                        href="#"
                >{{ item.modelEnergy }}</a>
            </nav>
            <div class="header__login">
                <a class="nav__link login__link" href="">Магазин</a>
                <a class="nav__link login__link" href="">Войти</a>
                <button class="header__burger">
                    <img class="burger-btn" src="../../assets/img/header-burger.png" alt="burger">
                </button>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'TheHeader',

        data() {
            return {
                menu: [
                    {
                        modelS:  'Model S',
                        modelX: 'Model X',
                        model3: 'Model 3',
                        modelRoadster: 'Roadster',
                        modelEnergy: 'Energy',
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @mixin container() {
        max-width: 1440px;
        margin-left: auto;
        margin-right: auto;
    }

    .header {
        &__inner {
            @include container();
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 30px;
        }

        &__logo img {
            width: 167px;
            height: 51px;
        }

        &__login {
            display: flex;
            align-items: center;
        }

        &__burger {
            cursor: pointer;
            background-color: transparent;
            border: none;
            padding-top: 5px;
        }
    }

    .nav {
        &__link {
            display: inline-block;
            text-decoration: none;
            margin-right: 50px;
            color: #000;
            font-weight: 600;
            transition: color .2s ease-in-out;

            &:last-child {
                margin-right: 0;
            }
        }

        &__link_active,
        &__link:hover {
            color: #E51937;
        }

        &__link_active::after {
            position: absolute;
            content: "";
            width: 60px;
            margin-top: 5px;
            border-bottom: 2px solid #E51937;
            display: block;
            border-bottom-left-radius: 5px 2px;
            border-bottom-right-radius: 5px 2px;
        }

        @media (max-width: 980px) {
            display: none;
        }
    }

    .login {
        &__link {
            margin-right: 30px;
        }

        @media (max-width: 1100px) {
            &__link {
                display: none;
            }
        }
    }
</style>