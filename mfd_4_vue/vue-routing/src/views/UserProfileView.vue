<template>
    <div v-for="user in users" :key="user.firstname">
    <h1>welcome {{ user.firstname }}</h1>
    <router-link :to="{ name: 'UserView', params: {userid: user.firstname} }"> click </router-link>
    </div>
   
</template>

<script setup>

 const users = 
 {
	"nf2sjb19u7": {
		"email": "john@doe.com",
		"firstname": "John",
		"lastname": "Doe"
	},
	"nfkx6cywbs": {
		"email": "jane@doe.com",
		"firstname": "Jane",
		"lastname": "Doe"
	},
	"6auit2k477": {
		"email": "mdam@ucl.dk",
		"firstname": "Morten",
		"lastname": "Damgaard"
	},
	"a6uqet4p3c": {
		"email": "kjcl@ucl.dk",
		"firstname": "Kenneth",
		"lastname": "Clausen"
	},
	"kaqbxhoadq": {
		"email": "jvje@ucl.dk",
		"firstname": "Jakob",
		"lastname": "Jensen"
	}
}

</script>