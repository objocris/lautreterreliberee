<script>
    import rimbaultTransparent from '$lib/images/rimbault-transparent.png';
    import logoSmall from '$lib/images/logo-small.png';
</script>

<slot/>

<footer class="mb-6">
    <div class="footer text-center">
        <img src={logoSmall} alt="Logo de l'association L'autre terre libérée à Luynes"/>
    </div>
    <div class="text-center">
        <a href="/" class="mr-2 ml-2">Accueil</a>
        <a href="/mentions-legales" class="mr-2 ml-2">Mentions légales</a>
    </div>
</footer>