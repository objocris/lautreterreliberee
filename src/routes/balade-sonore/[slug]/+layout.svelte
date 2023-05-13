<script>
    import rimbaultTransparent from '/static/images/rimbault-transparent.png';
    import logoSmall from '/static/images/logo-small.png';
</script>

<slot/>

<footer>
    <div class="footer text-center">
        <img src={rimbaultTransparent} alt="Portrait pochoir de Louis Rimbault"/>
        <img src={logoSmall} alt="Logo de l'association L'autre terre libérée à Luynes"/>
    </div>
</footer>