package com.reactnativeapp

import android.content.Context
import android.util.AttributeSet
import android.util.Log
import android.view.View
import com.facebook.react.ReactActivity

class MainActivity : ReactActivity() {
    /**
     * Returns the name of the main component registered from JavaScript. This is used to schedule
     * rendering of the component.
     *
     *
     */


    override fun getMainComponentName(): String? {
        return "ReactNativeApp"
    }
}

