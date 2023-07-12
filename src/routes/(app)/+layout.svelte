<script>
    import "../../app.css";
    import "../../lib/frankie/stylesheet.css";
    import "../../lib/css/style.scss";
    import logoSmall from "$lib/images/logo-small.jpg";
    import labelRenaissance from "$lib/images/label-renaissance-2023.jpg";
</script>

<div class="container p-4 pt-10">
    <div class="inner">
        <slot />
    </div>
    <footer class="mb-6">
        <div class="footer text-center">
            <img src={logoSmall} alt="Logo de l'association L'autre terre libérée à Luynes" />
            <a href="https://www.centre-valdeloire.fr/lactualite-de-la-region-centre-valdeloire/lancement-des-nouvelles-renaissances-2023" target="_blank">
                <img src={labelRenaissance} alt="Label Renaissance(s) 2023" />
            </a>
        </div>
        <div class="text-center">
            <a href="/" class="mr-2 ml-2 text-sm">Accueil</a>
            <a href="/association" class="mr-2 ml-2 text-sm">L'association</a>
            <a href="/balade-sonore" class="mr-2 ml-2 text-sm">Balade sonore</a>
            <a href="https://www.facebook.com/lautreterreliberee/" target="_blank" class="mr-2 ml-2 text-sm">Facebook</a>
            <a href="/mentions-legales" class="mr-2 ml-2 text-sm">Mentions légales</a>
        </div>
    </footer>
</div>
