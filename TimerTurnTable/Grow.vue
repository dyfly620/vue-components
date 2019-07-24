/* 发展历程 */
<template>
  <div class="wrapper full-height">
      <!-- <div class="annals"> -->
        <transition-group name="flip-list" tag="div" class="annals">
            <div class="item txt-center pos-r"
                v-for="(item, index) in annals" :key="item.year"
                :class="{active: activeYear == item.year}"
                @click="shuffle(index)"
                @mouseover="overHandler"
                @mouseout="interval"
            >
                <div class="year">{{item.year}}</div>
                <div class="dot pos-a"></div>
            </div>
        </transition-group>
      <!-- </div> -->
      <div class="des txt-center">{{curAnnal.des}}</div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            annals: [
                {
                    year: 1995,
                    des: '1995大事记'
                },
                {
                    year: 2004,
                    des: '2004大事记'
                },
                {
                    year: 2008,
                    des: '2008大事记'
                },
                {
                    year: 2009,
                    des: '2009大事记'
                },
                {
                    year: 2014,
                    des: '750kV变压器通过国家鉴定；与清华启迪控股联合打造正泰启迪电港；500kV／400MVA变压器成为全球通过突发短路试验的大容量单相电力变压器'
                },
                {
                    year: 2015,
                    des: '2015大事记'
                },
                {
                    year: 2016,
                    des: '2016大事记'
                },
                {
                    year: 2017,
                    des: '2017大事记'
                },
                {
                    year: 2018,
                    des: '2018大事记'
                }
            ],
            activeYear: '',
            id: null
        };
    },
    computed: {
        curAnnal() {
            const info = this.annals.find(item => this.activeYear == item.year);
            return info || {};
        },
        middle() {
            return Math.ceil(this.annals.length / 2);
        }
    },
    mounted() {
        this.activeYear = this.annals[this.middle - 1].year;
        this.interval();
    },
    beforeDestroy() {
        this.id && clearInterval(this.id);
        this.id = null;
    },
    methods: {
        shuffle(index) {
            const annal = JSON.parse(JSON.stringify(this.annals[index]));
            index = index + 1;
            const dValue = index - this.middle;
            if (dValue > 0) {
                const arr = this.annals.splice(0, dValue);
                this.annals.push(...arr);
            } else if (dValue < 0) {
                const arr = this.annals.splice(index - this.middle, Math.abs(dValue));
                this.annals.unshift(...arr);
            }
            this.activeYear = annal.year;
        },
        interval() {
            this.id = setInterval(() => {
                this.shuffle(5);
            }, 2000);
        },
        overHandler() {
            this.id && clearInterval(this.id);
            this.id = null;
        }
    }
};
</script>

<style scoped lang="less">
.wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
.annals{
    display: flex;
    border-bottom: 1px solid rgba(255,255,255,0.26);
    .item{
        width: 130px;
        height: 100px;
        cursor: pointer;
        .year{
            height: 56px;
            line-height: 58px;
            font-size: 20px;
            color: rgba(255,255,255,0.26);
        }
        .dot{
            width: 14px;
            height: 14px;
            background-color: rgba(255,255,255,0.26);
            border-radius: 50%;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 50%);
        }
        &.active{
            .year{
                color: #fff;
                font-size: 40px;
            }
            .dot{
                width: 20px;
                height: 20px;
                background-color: #fff;
            }
        }
        &:hover{
            .dot{
                width: 20px;
                height: 20px;
                background-color: #fff;
            }
        }
    }
}
.des{
    width:346px;
    height:88px;
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:22px;
    margin-top: 30px;
}
.flip-list-move {
  transition: transform 1s;
}
</style>
