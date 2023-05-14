<script>
    import rimbaultTransparent from '$lib/images/rimbault-transparent.png';
    import logoSmall from '$lib/images/logo-small.png';
</script>

<slot/>

<footer>
    <div class="footer text-center">
        <img src={rimbaultTransparent} alt="Portrait pochoir de Louis Rimbault"/>
        <img src={logoSmall} alt="Logo de l'association L'autre terre libérée à Luynes"/>
    </div>
    <div class="text-center">
        <a href="/">Accueil</a>
    </div>
</footer>