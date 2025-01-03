# -*- coding: utf-8 -*-
"""
pip installation configuration for the Stepwise Power XBlock.
"""
import io

# python stuff
import os
from typing import Dict

# 3rd party stuff
from setuptools import find_packages, setup

# our stuff
from custom_installer import CustomInstall

PACKAGE_NAME = "stepwise-power-xblock"
HERE = os.path.abspath(os.path.dirname(__file__))


def load_about() -> Dict[str, str]:
    about: Dict[str, str] = {}
    with io.open(
        os.path.join(HERE, "swpwrxblock", "__about__.py"), "rt", encoding="utf-8"
    ) as f:
        exec(f.read(), about)  # pylint: disable=exec-used  # nosec
    return about


ABOUT = load_about()


setup(
    name=PACKAGE_NAME,
    version=ABOUT["__version__"],
    description="Stepwise Power XBlock",
    license="MIT",
    install_requires=["XBlock", "requests"],
    packages=find_packages(where="."),
    package_data={
        "swpwrxblock": ["static/**", "public/**", "translations/**", "README.md"]
    },
    entry_points={"xblock.v1": ["swpwrxblock = swpwrxblock:SWPWRXBlock"]},
    cmdclass={
        "install": CustomInstall,
    },
)
