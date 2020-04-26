package com.reactnativeapp

import android.content.Context
import android.provider.ContactsContract
import android.provider.Settings
import android.util.Log
import android.view.View
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.*
import com.facebook.react.bridge.NativeModule
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager
import java.util.*
import kotlin.system.measureTimeMillis

class NativeCallModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "NativeModule"

    @ReactMethod
    fun emptyMethod(callback: Callback) {
        callback.invoke(null)
    }

    @ReactMethod
    fun getList(size: Int, callback: Callback) {

        val list = DataSource.getList(size)
        val nativeArray = WritableNativeArray()

        val pushToArrayTime = measureTimeMillis {
            list.forEach { nativeArray.pushString(it) }
        }.toInt()

        callback.invoke(nativeArray, pushToArrayTime)
    }
}

object DataSource {

    val base = listOf(
            "Renae", "Paul", "Elowen", "Lily-Rose", "Hermione", "Faizaan", "Eesha",
            "Xavier", "Joyce", "Marshall", "Aneeka", "Clyde", "Huzaifah", "Lynda",
            "Herbert", "Curtis", "Bethan", "Jokubas", "Alyce", "Priya", "Ayah",
            "Judah", "Harvie", "Peter", "Rebecca", "Patsy", "Abdurahman", "Charleigh",
            "Serenity", "Rhia", "Ursula", "Abby", "Lex", "Abid", "Angela", "Saul",
            "Jimi", "Kennedy", "Izabel", "Teresa", "Khalil", "John", "Emil", "Umaiza",
            "Filip", "Dominick", "Paul", "Austin", "Bronwen", "Riaz", "Dollie",
            "Harriet", "Tamara", "Kali", "Momina", "Verity", "Zacharias", "Mariyah",
            "Milo", "Sayed", "Ethan", "Hamish", "Mercedes", "Shanice", "Antoine",
            "Sachin", "Julie", "Asiyah", "Steve", "Keeva", "Nicole", "Cecily",
            "Osman", "Samiya", "Carl", "Marcelina", "Enrique", "Marius", "Sid", "Arun",
            "Adrian", "Kealan", "Kayan", "Roxie", "Tayyab", "Kelsi", "Suraj", "Brian",
            "Sadiyah", "Iga", "Clifford", "Manha", "Harlee", "Muhammed", "Menaal",
            "Mia", "Conna", "Kris", "Reegan", "Blessing"
    )

    private fun generateList(size: Int) : List<String>{

        val generatedList = mutableListOf<String>()

        for (i in 1 .. size / base.size)
            generatedList.addAll(base)

        return generatedList
    }

    fun getList(size: Int) : List<String>{

        return   when (size){
            100 -> list100
            1000 -> list1000
            10000 -> list10000
            else -> listOf()
        }
    }

    val list100 = generateList(100)
    val list1000 = generateList(1000)
    val list10000 = generateList(10000)
}


class NativeCallPackage : ReactPackage {
    override fun createNativeModules(reactContext: ReactApplicationContext): MutableList<NativeModule> {
        return mutableListOf(NativeCallModule(reactContext))
    }

    override fun createViewManagers(reactContext: ReactApplicationContext): MutableList<ViewManager<View, ReactShadowNode<*>>> {
        return Collections.emptyList()
    }

}
