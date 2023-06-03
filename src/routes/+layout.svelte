<script>
    import "../app.css";
    import "../lib/frankie/stylesheet.css";
    import "../lib/css/style.scss";
    import logoSmall from "$lib/images/logo-small.png";
</script>

<div class="container pt-10">
    <slot />
    <footer class="mb-6">
        <div class="footer text-center">
            <img src={logoSmall} alt="Logo de l'association L'autre terre libérée à Luynes" />
        </div>
        <div class="text-center">
            <a href="/" class="mr-2 ml-2">Accueil</a>
            <a href="/mentions-legales" class="mr-2 ml-2">Mentions légales</a>
        </div>
    </footer>
</div>
