const { ref, onBeforeUnmount } = Vue

const app = Vue.createApp({
    data: function () {
        return {
            isOutMapChecked: this.initIsOutMapChecked(),
            isOutCompassChecked: this.initIsOutCompassChecked(),
            isCompassFollowChecked: this.initIsCompassFollowChecked(),
            isMapNotifChecked: this.initIsMapNotifChecked(),
            isLowFuelChecked: this.initIsLowFuelChecked(),
            isCinematicNotifChecked: this.initIsCinematicNotifChecked(),
            isDynamicHealthChecked: this.initIsDynamicHealthChecked(),
            isDynamicArmorChecked: this.initIsDynamicArmorChecked(),
            isDynamicHungerChecked: this.initIsDynamicHungerChecked(),
            isDynamicThirstChecked: this.initIsDynamicThirstChecked(),
            isDynamicStressChecked: this.initIsDynamicStressChecked(),
            isDynamicOxygenChecked: this.initIsDynamicOxygenChecked(),
            isChangeFPSChecked: this.initIsChangeFPSChecked(),
            isToggleMapShapeChecked: this.initIsToggleMapShapeChecked(),
            isHideMapChecked: this.initIsHideMapChecked(),
            isToggleMapBordersChecked: this.initIsToggleMapBordersChecked(),
            isDynamicEngineChecked: this.initIsDynamicEngineChecked(),
            isDynamicNitroChecked: this.initIsDynamicNitroChecked(),
            isChangeCompassFPSChecked: this.initIsChangeCompassFPSChecked(),
            isShowCompassChecked: this.initIsShowCompassChecked(),
            isShowStreetsChecked: this.initIsShowStreetsChecked(),
            isPointerShowChecked: this.initIsPointerShowChecked(),
            isDegreesShowChecked: this.initIsDegreesShowChecked(),
            isCineamticModeChecked: this.initIsCineamticModeChecked(),
            ammoCount: 0,
        };
    },
    setup() {
        const progress = ref([
            { loading: false, percentage: 0 },
            { loading: false, percentage: 0 },
            { loading: false, percentage: 0 }
        ])

        const intervals = [null, null, null]

        function startComputing(id) {
            progress.value[id].loading = true
            progress.value[id].percentage = 0

            intervals[id] = setInterval(() => {
                progress.value[id].percentage += Math.floor(Math.random() * 8 + 10)
                if (progress.value[id].percentage >= 100) {
                    clearInterval(intervals[id])
                    progress.value[id].loading = false
                }
            }, 700)
        }

        onBeforeUnmount(() => {
            intervals.forEach(val => {
                clearInterval(val)
            })
        })
        return {
            framework: {
                plugins: [
                    'LocalStorage',
                    'SessionStorage'
                ]
            },
            tab: ref('hud'),
            splitterModel: ref(20),
            selection: ref([]),
            progress,
            startComputing,
        }
    },
    watch: {
        isOutMapChecked: function () {
            localStorage.setItem("isOutMapChecked", this.isOutMapChecked);
        },
        isOutCompassChecked: function () {
            localStorage.setItem("isOutCompassChecked", this.isOutCompassChecked);
        },
        isCompassFollowChecked: function () {
            localStorage.setItem("isCompassFollowChecked", this.isCompassFollowChecked);
        },
        isMapNotifChecked: function () {
            localStorage.setItem("isMapNotifChecked", this.isMapNotifChecked);
        },
        isLowFuelChecked: function () {
            localStorage.setItem("isLowFuelChecked", this.isLowFuelChecked);
        },
        isCinematicNotifChecked: function () {
            localStorage.setItem("isCinematicNotifChecked", this.isCinematicNotifChecked);
        },
        isDynamicHealthChecked: function () {
            localStorage.setItem("isDynamicHealthChecked", this.isDynamicHealthChecked);
        },
        isDynamicArmorChecked: function () {
            localStorage.setItem("isDynamicArmorChecked", this.isDynamicArmorChecked);
        },
        isDynamicHungerChecked: function () {
            localStorage.setItem("isDynamicHungerChecked", this.isDynamicHungerChecked);
        },
        isDynamicThirstChecked: function () {
            localStorage.setItem("isDynamicThirstChecked", this.isDynamicThirstChecked);
        },
        isDynamicStressChecked: function () {
            localStorage.setItem("isDynamicStressChecked", this.isDynamicStressChecked);
        },
        isDynamicOxygenChecked: function () {
            localStorage.setItem("isDynamicOxygenChecked", this.isDynamicOxygenChecked);
        },
        isChangeFPSChecked: function () {
            localStorage.setItem("isChangeFPSChecked", this.isChangeFPSChecked);
        },
        isToggleMapShapeChecked: function () {
            localStorage.setItem("isToggleMapShapeChecked", this.isToggleMapShapeChecked);
        },
        isHideMapChecked: function () {
            localStorage.setItem("isHideMapChecked", this.isHideMapChecked);
        },
        isToggleMapBordersChecked: function () {
            localStorage.setItem("isToggleMapBordersChecked", this.isToggleMapBordersChecked);
        },
        isDynamicEngineChecked: function () {
            localStorage.setItem("isDynamicEngineChecked", this.isDynamicEngineChecked);
        },
        isDynamicNitroChecked: function () {
            localStorage.setItem("isDynamicNitroChecked", this.isDynamicNitroChecked);
        },
        isChangeCompassFPSChecked: function () {
            localStorage.setItem("isChangeCompassFPSChecked", this.isChangeCompassFPSChecked);
        },
        isShowCompassChecked: function () {
            localStorage.setItem("isShowCompassChecked", this.isShowCompassChecked);
        },
        isShowStreetsChecked: function () {
            localStorage.setItem("isShowStreetsChecked", this.isShowStreetsChecked);
        },
        isPointerShowChecked: function () {
            localStorage.setItem("isPointerShowChecked", this.isPointerShowChecked);
        },
        isDegreesShowChecked: function () {
            localStorage.setItem("isDegreesShowChecked", this.isDegreesShowChecked);
        },
        isCineamticModeChecked: function () {
            localStorage.setItem("isCineamticModeChecked", this.isCineamticModeChecked);
        },
    },
    methods: {
        initIsOutMapChecked: function () {
            const stored = localStorage.getItem("isOutMapChecked");
            if (stored === null) {
                return true;
            } else {
                return stored == 'true';
            }
        },
        initIsOutCompassChecked: function () {
            const stored = localStorage.getItem("isOutCompassChecked");
            if (stored === null) {
                return true;
            } else {
                return stored == 'true';
            }
        },
        initIsCompassFollowChecked: function () {
            const stored = localStorage.getItem("isCompassFollowChecked");
            if (stored === null) {
                return true;
            } else {
                return stored == 'true';
            }
        },
        initIsMapNotifChecked: function () {
            const stored = localStorage.getItem("isMapNotifChecked");
            if (stored === null) {
                return true;
            } else {
                return stored == 'true';
            }
        },
        initIsLowFuelChecked: function () {
            const stored = localStorage.getItem("isLowFuelChecked");
            if (stored === null) {
                return true;
            } else {
                return stored == 'true';
            }
        },
        initIsCinematicNotifChecked: function () {
            const stored = localStorage.getItem("isCinematicNotifChecked");
            if (stored === null) {
                return true;
            } else {
                return stored == 'true';
            }
        },
        initIsDynamicHealthChecked: function () {
            const stored = localStorage.getItem("isDynamicHealthChecked");
            if (stored === null) {
                return false;
            } else {
                return stored == 'true';
            }
        },
        initIsDynamicArmorChecked: function () {
            const stored = localStorage.getItem("isDynamicArmorChecked");
            if (stored === null) {
                return false;
            } else {
                return stored == 'true';
            }
        },
        initIsDynamicHungerChecked: function () {
            const stored = localStorage.getItem("isDynamicHungerChecked");
            if (stored === null) {
                return false;
            } else {
                return stored == 'true';
            }
        },
        initIsDynamicThirstChecked: function () {
            const stored = localStorage.getItem("isDynamicThirstChecked");
            if (stored === null) {
                return false;
            } else {
                return stored == 'true';
            }
        },
        initIsDynamicStressChecked: function () {
            const stored = localStorage.getItem("isDynamicStressChecked");
            if (stored === null) {
                return false;
            } else {
                return stored == 'true';
            }
        },
        initIsDynamicOxygenChecked: function () {
            const stored = localStorage.getItem("isDynamicOxygenChecked");
            if (stored === null) {
                return false;
            } else {
                return stored == 'true';
            }
        },
        initIsChangeFPSChecked: function () {
            const stored = localStorage.getItem("isChangeFPSChecked");
            if (stored === null) {
                return 'Optimized';
            } else {
                return stored;
            }
        },
        initIsToggleMapShapeChecked: function () {
            const stored = localStorage.getItem("isToggleMapShapeChecked");
            if (stored === null) {
                return 'Circle';
            } else {
                return stored;
            }
        },
        initIsHideMapChecked: function () {
            const stored = localStorage.getItem("isHideMapChecked");
            if (stored === null) {
                return true;
            } else {
                return stored == 'true';
            }
        },
        initIsToggleMapBordersChecked: function () {
            const stored = localStorage.getItem("isToggleMapBordersChecked");
            if (stored === null) {
                return true;
            } else {
                return stored == 'true';
            }
        },
        initIsDynamicEngineChecked: function () {
            const stored = localStorage.getItem("isDynamicEngineChecked");
            if (stored === null) {
                return false;
            } else {
                return stored == 'true';
            }
        },
        initIsDynamicNitroChecked: function () {
            const stored = localStorage.getItem("isDynamicNitroChecked");
            if (stored === null) {
                return false;
            } else {
                return stored == 'true';
            }
        },
        initIsChangeCompassFPSChecked: function () {
            const stored = localStorage.getItem("isChangeCompassFPSChecked");
            if (stored === null) {
                return 'Optimized';
            } else {
                return stored;
            }
        },
        initIsShowCompassChecked: function () {
            const stored = localStorage.getItem("isShowCompassChecked");
            if (stored === null) {
                return true;
            } else {
                return stored == 'true';
            }
        },
        initIsShowStreetsChecked: function () {
            const stored = localStorage.getItem("isShowStreetsChecked");
            if (stored === null) {
                return true;
            } else {
                return stored == 'true';
            }
        },
        initIsPointerShowChecked: function () {
            const stored = localStorage.getItem("isPointerShowChecked");
            if (stored === null) {
                return true;
            } else {
                return stored == 'true';
            }
        },
        initIsDegreesShowChecked: function () {
            const stored = localStorage.getItem("isDegreesShowChecked");
            if (stored === null) {
                return true;
            } else {
                return stored == 'true';
            }
        },
        initIsCineamticModeChecked: function () {
            const stored = localStorage.getItem("isCineamticModeChecked");
            if (stored === null) {
                return false;
            } else {
                return stored == 'true';
            }
        },
        resetStorage: function (event) {
            targetId = event.currentTarget.id;
            localStorage.clear();
            resetStorage()
        },
        restartHud: function (event) {
            targetId = event.currentTarget.id;
            restartHud()
        },
        showOutMap: function (event) {
            targetId = event.currentTarget.id;
            showOutMap()
        },
        showOutCompass: function (event) {
            targetId = event.currentTarget.id;
            showOutCompass()
        },
        showFollowCompass: function (event) {
            targetId = event.currentTarget.id;
            showFollowCompass()
        },
        showMapNotif: function (event) {
            targetId = event.currentTarget.id;
            showMapNotif()
        },
        showFuelAlert: function (event) {
            targetId = event.currentTarget.id;
            showFuelAlert()
        },
        showCinematicNotif: function (event) {
            targetId = event.currentTarget.id;
            showCinematicNotif()
        },
        dynamicHealth: function (event) {
            targetId = event.currentTarget.id;
            dynamicHealth()
        },
        dynamicArmor: function (event) {
            targetId = event.currentTarget.id;
            dynamicArmor()
        },
        dynamicHunger: function (event) {
            targetId = event.currentTarget.id;
            dynamicHunger()
        },
        dynamicThirst: function (event) {
            targetId = event.currentTarget.id;
            dynamicThirst()
        },
        dynamicStress: function (event) {
            targetId = event.currentTarget.id;
            dynamicStress()
        },
        dynamicOxygen: function (event) {
            targetId = event.currentTarget.id;
            dynamicOxygen()
        },
        changeFPS: function (event) {
            targetId = event.currentTarget.id;
            changeFPS()
        },
        ToggleMapShape: function (event) {
            targetId = event.currentTarget.id;
            ToggleMapShape()
        },
        HideMap: function (event) {
            targetId = event.currentTarget.id;
            HideMap()
        },
        ToggleMapBorders: function (event) {
            targetId = event.currentTarget.id;
            ToggleMapBorders()
        },
        dynamicEngine: function (event) {
            targetId = event.currentTarget.id;
            dynamicEngine()
        },
        dynamicNitro: function (event) {
            targetId = event.currentTarget.id;
            dynamicNitro()
        },
        changeCompassFPS: function (event) {
            targetId = event.currentTarget.id;
            changeCompassFPS()
        },
        showCompassBase: function (event) {
            targetId = event.currentTarget.id;
            showCompassBase()
        },
        showStreetsNames: function (event) {
            targetId = event.currentTarget.id;
            showStreetsNames()
        },
        showPointerIndex: function (event) {
            targetId = event.currentTarget.id;
            showPointerIndex()
        },
        showDegreesNum: function (event) {
            targetId = event.currentTarget.id;
            showDegreesNum()
        },
        cinematicMode: function (event) {
            targetId = event.currentTarget.id;
            cinematicMode()
        },
        updateAmmoCount(newCount) {
            console.log("Ammo Count Updated:", newCount);
            this.ammoCount = newCount;
            document.getElementById("ammoCount").innerText = `${newCount}`;
        },
    },
    mounted() {
        this.listener = window.addEventListener("message", (event) => {
            if (event.data.event === 'isToggleMapShapeChecked' || event.data.event === 'isChangeFPSChecked') {
                eval(`this.${event.data.event} = "${event.data.toggle}"`)
            }
            if (event.data.action === 'updateAmmo') {
                console.log("Ammo Count Received:", event.data.ammoCount);
                this.updateAmmoCount(event.data.ammoCount);
            }
        });
    },
})

app.use(Quasar, { config: {} })
app.mount('#menu')

document.onkeyup = function (data) {
    if (data.key == 'Escape') {
        closeMenu()
    }
};

function closeMenu() {
    $("#openmenu").fadeOut(550);
    $.post(`https://${GetParentResourceName()}/closeMenu`);
}
function restartHud() {
    closeMenu()
    $.post(`https://${GetParentResourceName()}/restartHud`);
}
function resetStorage() {
    closeMenu()
    $.post(`https://${GetParentResourceName()}/resetStorage`);
}
function showOutMap() {
    $.post(`https://${GetParentResourceName()}/showOutMap`);
}
function showOutCompass() {
    $.post(`https://${GetParentResourceName()}/showOutCompass`);
}
function showFollowCompass() {
    $.post(`https://${GetParentResourceName()}/showFollowCompass`);
}
function showMapNotif() {
    $.post(`https://${GetParentResourceName()}/showMapNotif`);
}
function showFuelAlert() {
    $.post(`https://${GetParentResourceName()}/showFuelAlert`);
}
function showCinematicNotif() {
    $.post(`https://${GetParentResourceName()}/showCinematicNotif`);
}
function dynamicHealth() {
    $.post(`https://${GetParentResourceName()}/dynamicHealth`);
}
function dynamicArmor() {
    $.post(`https://${GetParentResourceName()}/dynamicArmor`);
}
function dynamicHunger() {
    $.post(`https://${GetParentResourceName()}/dynamicHunger`);
}
function dynamicThirst() {
    $.post(`https://${GetParentResourceName()}/dynamicThirst`);
}
function dynamicStress() {
    $.post(`https://${GetParentResourceName()}/dynamicStress`);
}
function dynamicOxygen() {
    $.post(`https://${GetParentResourceName()}/dynamicOxygen`);
}
function dynamicEngine() {
    $.post(`https://${GetParentResourceName()}/dynamicEngine`);
}
function dynamicNitro() {
    $.post(`https://${GetParentResourceName()}/dynamicNitro`);
}
function ToggleMapShape() {
    $.post(`https://${GetParentResourceName()}/ToggleMapShape`);
}
function changeFPS() {
    $.post(`https://${GetParentResourceName()}/changeFPS`);
}
function ToggleMapBorders() {
    $.post(`https://${GetParentResourceName()}/ToggleMapBorders`);
}
function HideMap() {
    $.post(`https://${GetParentResourceName()}/HideMap`);
}
function changeCompassFPS() {
    $.post(`https://${GetParentResourceName()}/changeCompassFPS`);
}
function showCompassBase() {
    $.post(`https://${GetParentResourceName()}/showCompassBase`);
}
function showStreetsNames() {
    $.post(`https://${GetParentResourceName()}/showStreetsNames`);
}
function showPointerIndex() {
    $.post(`https://${GetParentResourceName()}/showPointerIndex`);
}
function showDegreesNum() {
    $.post(`https://${GetParentResourceName()}/showDegreesNum`);
}
function cinematicMode() {
    $.post(`https://${GetParentResourceName()}/cinematicMode`);
}

$(document).ready(function () {
    window.addEventListener("message", function (event) {
        switch (event.data.action) {
            case "open":
                Open(event.data);
                break;
        }
    });
});

Open = function (data) {
    $("#openmenu").fadeIn(150);
}
$('.closeMenu').click(() => {
    closeMenu()
});

// MONEY HUD

const moneyHud = Vue.createApp({
    data() {
        return {
            cash: 0,
            bank: 0,
            amount: 0,
            plus: false,
            minus: false,
            showCash: false,
            showBank: false,
            showUpdate: false,
        };
    },
    destroyed() {
        window.removeEventListener("message", this.listener);
    },
    mounted() {
        this.listener = window.addEventListener("message", (event) => {
            switch (event.data.action) {
                case "showconstant":
                    this.showConstant(event.data);
                    break;
                case "updatemoney":
                    this.update(event.data);
                    break;
                case "show":
                    this.showAccounts(event.data);
                    break;
            }
        });
    },
    methods: {
        // CONFIGURE YOUR CURRENCY HERE
        // https://www.w3schools.com/tags/ref_language_codes.asp LANGUAGE CODES
        // https://www.w3schools.com/tags/ref_country_codes.asp COUNTRY CODES
        formatMoney(value) {
            const formatter = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
            });
            return formatter.format(value);
        },
        showConstant(data) {
            this.showCash = true;
            this.showBank = true;
            this.cash = data.cash;
            this.bank = data.bank;
        },
        update(data) {
            this.showUpdate = true;
            this.amount = data.amount;
            this.bank = data.bank;
            this.cash = data.cash;
            this.minus = data.minus;
            this.plus = data.plus;
            if (data.type === "cash") {
                if (data.minus) {
                    this.showCash = true;
                    this.minus = true;
                    setTimeout(() => (this.showUpdate = false), 1000);
                    setTimeout(() => (this.showCash = false), 2000);
                } else {
                    this.showCash = true;
                    this.plus = true;
                    setTimeout(() => (this.showUpdate = false), 1000);
                    setTimeout(() => (this.showCash = false), 2000);
                }
            }
            if (data.type === "bank") {
                if (data.minus) {
                    this.showBank = true;
                    this.minus = true;
                    setTimeout(() => (this.showUpdate = false), 1000);
                    setTimeout(() => (this.showBank = false), 2000);
                } else {
                    this.showBank = true;
                    this.plus = true;
                    setTimeout(() => (this.showUpdate = false), 1000);
                    setTimeout(() => (this.showBank = false), 2000);
                }
            }
        },
        showAccounts(data) {
            if (data.type === "cash" && !this.showCash) {
                this.showCash = true;
                this.cash = data.cash;
                setTimeout(() => (this.showCash = false), 3500);
            } else if (data.type === "bank" && !this.showBank) {
                this.showBank = true;
                this.bank = data.bank;
                setTimeout(() => (this.showBank = false), 3500);
            }
        },
    },
}).mount("#money-container");

// PLAYER HUD

const playerHud = {
    data() {
        return {
            dynamicHealth: 0,
            dynamicHunger: 0,
            dynamicThirst: 0,
            dynamicStress: 0,
            dynamicOxygen: 0,
            dynamicEngine: 0,
            dynamicNitro: 0,
            nos: 0,
            static: 100,

            health: 0,
            playerDead: 0,
            armor: 0,
            hunger: 0,
            thirst: 0,
            stress: 0,
            voice: 0,
            radio: 0,
            harness: 0,
            nitroActive: 0,
            cruise: 0,
            parachute: 0,
            oxygen: 0,
            hp: 0,
            armed: 0,
            speed: 0,
            engine: 0,
            cinematic: 0,
            dev: 0,
            show: false,
            talking: false,
            showVoice: true,
            showHealth: false,
            showArmor: true,
            showHunger: true,
            showThirst: true,
            showNos: true,
            showStress: true,
            showOxygen: false,
            showArmed: true,
            showEngine: false,
            showCruise: false,
            showHarness: false,
            showParachute: false,
            showDev: false,
            voiceIcon: "fas fa-microphone",
            talkingColor: "#FFFFFF",
            nosColor: "",
            engineColor: "#3FA554",
            armorColor: "",
            hungerColor: "",
            healthColor: "",
            thirstColor: "",
        };
    },

    destroyed() {
        window.removeEventListener("message", this.listener);
    },
    mounted() {
        this.listener = window.addEventListener("message", (event) => {
            if (event.data.action === "hudtick") {
                this.hudTick(event.data);
            }
        });
        Config = {};
    },
    methods: {
        hudTick(data) {
            this.show = data.show;
            this.health = data.health;
            this.armor = data.armor;
            this.hunger = Math.round(data.hunger);
            this.thirst = Math.round(data.thirst);
            this.stress = data.stress;
            this.voice = data.voice;
            this.talking = data.talking;
            this.radio = data.radio;
            this.nos = data.nos;
            this.oxygen = data.oxygen;
            this.cruise = data.cruise;
            this.nitroActive = data.nitroActive;
            this.harness = data.harness;
            this.speed = data.speed;
            this.armed = data.armed;
            this.parachute = data.parachute;
            this.hp = data.hp * 5;
            this.engine = Math.round(data.engine);
            this.cinematic = data.cinematic;
            this.dev = data.dev;
            this.playerDead = data.playerDead;
            this.dynamicHealth = data.dynamicHealth;
            this.dynamicArmor = data.dynamicArmor;
            this.dynamicHunger = data.dynamicHunger;
            this.dynamicThirst = data.dynamicThirst;
            this.dynamicStress = data.dynamicStress;
            this.dynamicOxygen = data.dynamicOxygen;
            this.dynamicEngine = data.dynamicEngine;
            this.dynamicNitro = data.dynamicNitro;

            if (data.dynamicHealth == true) {
                if (data.health >= 100) {
                    this.showHealth = false;
                }
                else {
                    this.showHealth = true;
                }
            } else if (data.dynamicHealth == false) {
                this.showHealth = true;
            }
            if (data.playerDead === false) {
                this.healthColor = "#3FA554";
            } else {
                this.healthColor = "#ff0000";
                this.health = 100;
            }

            if (data.dynamicArmor == true) {
                if (data.armor == 0) {
                    this.showArmor = false;
                } else {
                    this.showArmor = true;
                }
            } else if (data.dynamicArmor == false) {
                this.showArmor = true;
            }

            if (data.armor <= 0) {
                this.armorColor = "#FF0000";
            } else {
                this.armorColor = "#326dbf";
            }

            if (data.dynamicHunger == true) {
                if (data.hunger >= 100) {
                    this.showHunger = false;
                }
                else {
                    this.showHunger = true;
                }
            } else if (data.dynamicHunger == false) {
                this.showHunger = true;
            }
            if (data.hunger >= 100) {
                this.hungerColor = "#dd6e14";
            } else if (data.hunger <= 30) {
                this.hungerColor = "#ff0000";
            } else {
                this.hungerColor = "#dd6e14";
            }

            if (data.dynamicThirst == true) {
                if (data.thirst >= 100) {
                    this.showThirst = false;
                }
                else {
                    this.showThirst = true;
                }
            } else if (data.dynamicThirst == false) {
                this.showThirst = true;
            }
            if (data.thirst >= 100) {
                this.thirstColor = "#1a7cad";
            } else if (data.thirst <= 30) {
                this.thirstColor = "#ff0000";
            } else {
                this.thirstColor = "#1a7cad";
            }

            if (data.dynamicStress == true) {
                if (data.stress == 0) {
                    this.showStress = false;
                } else {
                    this.showStress = true;
                }
            } else if (data.dynamicStress == false) {
                this.showStress = true;
            }

            if (data.dynamicOxygen == true) {
                if (data.oxygen >= 100) {
                    this.showOxygen = false;
                }
                else {
                    this.showOxygen = true;
                }
            } else if (data.dynamicOxygen == false) {
                this.showOxygen = true;
            }

            if (data.dynamicEngine == true) {
                if (data.engine >= 95) {
                    this.showEngine = false;
                } else if (data.engine < 0) {
                    this.showEngine = false;
                } else { this.showEngine = true; }
            } else if (data.dynamicEngine == false) {
                if (data.engine < 0) {
                    this.showEngine = false;
                } else { this.showEngine = true; }
            }
            if (data.engine <= 45) {
                this.engineColor = "red";
            } else if (data.engine <= 75 && data.engine >= 46) {
                this.engineColor = "yellow";
            } else if (data.engine <= 100) {
                this.engineColor = "green";
            }

            if (data.dynamicNitro == true) {
                if (data.nos === 0 || data.nos === undefined) {
                    this.showNos = false;
                } else if (data.nos < 0) {
                    this.showNos = false;
                } else { this.showNos = true; }
            } else if (data.dynamicNitro == false) {
                if (data.nos < 0) {
                    this.showNos = false;
                } else { this.showNos = true; }
            }
            if (data.nitroActive) {
                this.nosColor = "#D64763";
            } else {
                this.nosColor = "#FFFFFF";
            }

            if (data.talking && data.radio) {
                this.talkingColor = "#D64763";
            } else if (data.talking) {
                this.talkingColor = '#FFFF3E';
            } else {
                this.talkingColor = "#FFFFFF";
            }
            if (data.radio != 0 && data.radio != undefined) {
                this.voiceIcon = 'fas fa-headset';
            } else if (data.radio == 0 || data.radio == undefined) {
                this.voiceIcon = 'fas fa-microphone';
            }
            if (data.cruise === true) {
                this.cruise = 1;
                this.showCruise = true;
            } else {
                this.cruise = 0;
                this.showCruise = false;
            }

            if (data.harness === true) {
                this.showHarness = true;
            } else {
                this.showHarness = false;
            }
            if (data.armed === true) {
                this.showArmed = true;
            } else {
                this.showArmed = false;
            }

            if (data.parachute >= 0) {
                this.showParachute = true;
            } else {
                this.showParachute = false;
            }

            if (data.dev === true) {
                this.showDev = true;
            } else {
                this.showDev = false;
            }

            if (data.isPaused === 1) {
                this.show = false;
            }
        },
        updateEngineHealth(newHealth) {
            this.engine = Math.round(newHealth); // Round to nearest whole number

            // Dynamic color updates
            if (newHealth <= 45) {
                this.engineColor = 'red';
            } else if (newHealth <= 75 && newHealth >= 46) {
                this.engineColor = 'yellow';
            } else {
                this.engineColor = 'green';
            }

            // Show or hide engine health bar based on dynamic conditions
            if (this.dynamicEngine) {
                if (newHealth >= 95 || newHealth < 0) {
                    this.showEngine = false;
                } else {
                    this.showEngine = true;
                }
            } else {
                if (newHealth < 0) {
                    this.showEngine = false;
                } else {
                    this.showEngine = true;
                }
            }
        },
    },
    watch: {
        engine(newValue) {
            this.updateEngineHealth(newValue); // Automatically update when engine health changes
        },
    },
};

const app2 = Vue.createApp(playerHud);
app2.use(Quasar);
app2.mount("#ui-container");

// VEHICLE HUD

const vehHud = {
    data() {
        return {
            speedometer: 66,
            fuelgauge: 69,
            altitudegauge: 75,
            fuel: 0,
            speed: 0,
            seatbelt: 0,
            showSquareB: 0,
            show: false,
            showAltitude: true,
            showSeatbelt: true,
            showSquare: false,
            showCircle: false,
            seatbeltColor: "",
            showHarness: false,
        };
    },

    destroyed() {
        window.removeEventListener("message", this.listener);
    },
    mounted() {
        this.listener = window.addEventListener("message", (event) => {
            if (event.data.action === "car") {
                this.vehicleHud(event.data);
            }
        });
    },
    methods: {
        vehicleHud(data) {
            this.show = data.show;
            this.speed = data.speed;
            this.altitude = data.altitude;
            this.fuel = (data.fuel * 0.71);
            this.showSeatbelt = data.showSeatbelt;
            this.showAltitude = data.showAltitude;
            this.showSquareB = data.showSquareB;
            this.showCircleB = data.showCircleB;
            this.showHarness = data.showHarness;
            this.harness = data.harness;

            if (data.seatbelt === true) {
                this.seatbelt = 1;
                this.seatbeltColor = "white";
            } else if (data.harness === true) {
                this.seatbelt = 1;
                this.showSeatbelt = true;
                this.seatbeltColor = "blue";
            } else {
                this.seatbelt = 0;
                this.showSeatbelt = false;
                this.seatbeltColor = "#FF5100";
            }

            if (data.showSeatbelt === true) {
                this.showSeatbelt = true;
            } else {
                this.showSeatbelt = false;
            }

            if (data.showAltitude === true) {
                this.showAltitude = true;
            } else {
                this.showAltitude = false;
            }

            // Update fuel color based on value
            if (this.fuel <= 20) {
                this.fuelColor = "#ff0000";
            } else if (this.fuel <= 30) {
                this.fuelColor = "#dd6e14";
            } else {
                this.fuelColor = "#FFFFFF";
            }

            // Call function to update fuel bar in the frontend
            this.updateFuelBar(this.fuel);

            if (data.showSquareB === true) {
                this.showSquare = true;
            } else {
                this.showSquare = false;
            }

            if (data.showCircleB === true) {
                this.showCircle = true;
            } else {
                this.showCircle = false;
            }

            if (data.isPaused === 1) {
                this.show = false;
            }

            // === Altitude Logic ===
            if (data.showAltitude) {
                try {
                    const maxAltitude = 1000; // Maximum altitude value
                    const numberHeight = 20; // Height of each number
                    const totalNumbers = 100; // Total number of steps

                    const dialElement = document.getElementById('dialNumbers');
                    if (!dialElement) {
                        console.error("Element with ID 'dialNumbers' not found");
                        return;
                    }
                    //5,7,18,19
                    // Inverted Calculation for Altitude Direction
                    const altitudeRatio = data.altitude / maxAltitude;
                    const translateY = (altitudeRatio * (numberHeight * totalNumbers));

                    // Check if altitude increased or decreased
                    const prevAltitude = this.prevAltitude || data.altitude; // Store previous altitude for comparison
                    if (data.altitude > prevAltitude) {
                        // Altitude increased, move upwards
                        dialElement.style.transition = "transform 0.05s cubic-bezier(0.25, 0.8, 0.25, 1)";
                    } else if (data.altitude < prevAltitude) {
                        // Altitude decreased, move downwards
                        dialElement.style.transition = "transform 0.05s cubic-bezier(0.25, 0.8, 0.25, 1)";
                    }

                    // Update the transformation for altitude change
                    dialElement.style.transform = `translateY(-${translateY}px)`; // Move based on altitude

                    // Update previous altitude for the next comparison
                    this.prevAltitude = data.altitude;

                    console.log(`Altitude: ${data.altitude}, TranslateY: ${translateY}`);
                } catch (error) {
                    console.error("Error updating altitude gauge:", error);
                }
            }
        },

        // Update fuel bar and text based on the fuel value
        updateFuelBar(fuelLevel) {
            // Update the fuel bar and text based on fuel level
            document.getElementById('fuel-bar').style.width = fuelLevel + '%';
            document.getElementById('fuel-text').textContent = Math.round(fuelLevel) + '%';
        }
    },


};
const app3 = Vue.createApp(vehHud);
app3.use(Quasar);
app3.mount("#veh-container");


// COMPASS HUD

const baseplateHud = {
    data() {
        return {
            show: false,
            street1: "",
            street2: "",
            showCompass: true,
            showStreets: true,
            showPointer: true,
            showDegrees: true,
        };
    },
    destroyed() {
        window.removeEventListener("message", this.listener);
    },
    mounted() {
        this.listener = window.addEventListener("message", (event) => {
            if (event.data.action == "update") {
                type = event.data.type
                value = event.data.value
                if (value !== undefined) {
                    $('.degrees').html(value);
                }
            }
            if (event.data.action === "baseplate") {
                this.baseplateHud(event.data);
            }
        });
    },
    methods: {
        baseplateHud(data) {
            this.show = data.show;
            this.street1 = data.street1;
            this.street2 = data.street2;
            this.showCompass = data.showCompass;
            this.showStreets = data.showStreets;
            this.showPointer = data.showPointer;
            this.showDegrees = data.showDegrees;
            if (data.showCompass == true) {
                this.showCompass = true;
            } else {
                this.showCompass = false;
            }
            if (data.showStreets == true) {
                this.showStreets = true;
            } else {
                this.showStreets = false;
            }
            if (data.showPointer == true) {
                this.showPointer = true;
            } else {
                this.showPointer = false;
            }
            if (data.showDegrees == true) {
                this.showDegrees = true;
            } else {
                this.showDegrees = false;
            }
        },
    },
};
const app4 = Vue.createApp(baseplateHud);
app4.use(Quasar);
app4.mount("#baseplate-container");



 // Listen for messages from the Lua script
 window.addEventListener('message', (event) => {
    const data = event.data;

    if (data.action === 'updateVoiceMode') {
        document.getElementById('voice-mode').innerText = `Voice Mode: ${data.mode}`;
    }
 });