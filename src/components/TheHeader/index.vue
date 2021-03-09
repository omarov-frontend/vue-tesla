<template>
    <header class="header">
        <div class="container header__inner">
            <a class="header__logo" href="#">
                <img src="../../assets/img/header-logo.png" alt="Tesla">
            </a>
            <nav class="nav">
                <router-link
                        v-for="(item, index) in menu"
                        :key="index"
                        class="nav__link"
                        :to="item.link"
                >{{ item.name }}</router-link>
            </nav>
            <div class="header__login">
                <router-link
                        class="nav__link login__link"
                        to="/login"
                >Войти
                </router-link>
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
                        link: '/',
                        name: 'Model S'
                    },
                    {
                        link: '/model-x',
                        name: 'Model X'
                    },
                    {
                        link: '/model-3',
                        name: 'Model 3'
                    },
                    {
                        link: '/roadster',
                        name: 'Roadster'
                    },
                    {
                        link: '/energy',
                        name: 'Energy'
                    }
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

        .router-link-exact-active,
        &__link:hover {
            color: #E51937;
        }

        .router-link-exact-active::after {
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